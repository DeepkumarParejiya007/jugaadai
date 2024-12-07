const oracledb = require('oracledb');

const getReviewsByToolId = async (toolId) => {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM REVIEWS WHERE tool_id = :id', [toolId]);
    return result.rows;
  } catch (err) {
    console.error('Error fetching reviews:', err);
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

const addReview = async (toolId, userId, rating, comment) => {
  let connection;
  try {
    connection = await oracledb.getConnection();
    await connection.execute(
      `INSERT INTO REVIEWS (tool_id, user_id, rating, comment, created_at)
       VALUES (:toolId, :userId, :rating, :comment, SYSDATE)`,
      [toolId, userId, rating, comment],
      { autoCommit: true }
    );
  } catch (err) {
    console.error('Error adding review:', err);
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

module.exports = {
  getReviewsByToolId,
  addReview,
};
