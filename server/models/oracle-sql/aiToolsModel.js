const oracledb = require('oracledb');

const getAllTools = async () => {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const query = `
      SELECT tool_id, tool_name, TO_CHAR(description) AS description, developer, release_date, website_url
      FROM ai_tools`;

    const result = await connection.execute(query, [], { resultSet: true, maxRows: 100, outFormat: oracledb.OBJECT });

    const tools = [];
    let row;
    while ((row = await result.resultSet.getRow())) {
      tools.push({
        tool_id: row.TOOL_ID,
        tool_name: row.TOOL_NAME,
        description: row.DESCRIPTION || 'No description available',
        developer: row.DEVELOPER,
        release_date: row.RELEASE_DATE ? new Date(row.RELEASE_DATE).toLocaleDateString() : "Unknown",
        website_url: row.WEBSITE_URL,
      });
    }
    await result.resultSet.close(); // Close resultSet when done

    console.log("Tools data:", tools);
    return tools;
  } catch (err) {
    console.error('Error fetching AI Tools:', err);
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

const getToolById = async (toolId) => {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM AI_TOOLS WHERE tool_id = :id', [toolId]);
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching tool by ID:', err);
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

const searchToolsByDescription = async (searchTerm) => {
    let connection;
    console.log(searchTerm);
    try {
      connection = await oracledb.getConnection();
      const query = `
        SELECT tool_id, tool_name, TO_CHAR(description) AS description, developer, release_date, website_url
        FROM AI_TOOLS
        WHERE LOWER(description) LIKE '%' || :searchTerm || '%'
        ORDER BY tool_name
      `;
      const result = await connection.execute(query, [searchTerm], { resultSet: true, maxRows: 100, outFormat: oracledb.OBJECT });
      const tools = [];
      let row;
      while ((row = await result.resultSet.getRow())) {
        tools.push({
          tool_id: row.TOOL_ID,
          tool_name: row.TOOL_NAME,
          description: row.DESCRIPTION || 'No description available',
          developer: row.DEVELOPER,
          release_date: row.RELEASE_DATE ? new Date(row.RELEASE_DATE).toLocaleDateString() : "Unknown",
          website_url: row.WEBSITE_URL,
        });
      }
      await result.resultSet.close();
      console.log(tools);
      return tools;
    } catch (err) {
      console.error('Error searching tools:', err);
      throw err;
    } finally {
      if (connection) {
        await connection.close();
      }
    }
};

const addTool = async (toolData) => {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const query = `INSERT INTO ai_tools (tool_name, description,category_id, developer, release_date, pricing_info, website_url, updated_at) 
    VALUES (:tool_name, :tool_description, 0 ,:tool_developer, TO_DATE(:tool_release_date, 'YYYY-MM-DD'), 0 , :tool_url, CURRENT_TIMESTAMP)`;
    
    const binds = {
      tool_name: toolData.tool_name,
      tool_description: toolData.tool_description,
      tool_developer: toolData.tool_developer,
      tool_release_date: toolData.tool_release_date,
      tool_url: toolData.tool_url,
    };
    await connection.execute(query, binds, { autoCommit: true });
    return { message: 'Tool added successfully' };
  } catch (err) {
    console.error('Error adding tool:', err);
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

module.exports = {
  getAllTools,
  getToolById,
  searchToolsByDescription,
  addTool
};
