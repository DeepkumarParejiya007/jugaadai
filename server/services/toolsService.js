const toolsModel = require('../models/oracle-sql/aiToolsModel');

const fetchAllTools = async () => {
  try {
    const tools = await toolsModel.getAllTools();
    return tools;
  } catch (error) {
    throw new Error('Error in fetching all tools: ' + error.message);
  }
};

const fetchToolById = async (toolId) => {
  try {
    const tool = await toolsModel.getToolById(toolId);
    if (!tool) {
      throw new Error('Tool not found');
    }
    return tool;
  } catch (error) {
    throw new Error('Error in fetching tool by ID: ' + error.message);
  }
};

const findToolsByDescription = async (searchTerm) => {
  try {
    const tools = await toolsModel.searchToolsByDescription(searchTerm);
    return tools;
  } catch (error) {
    throw new Error('Error in searching tools by description: ' + error.message);
  }
};

const createTool = async (toolData) => {
    try {
      const addTool = await toolsModel.addTool(toolData);
      return addTool;
    } catch (error) {
      throw new Error('Error in creating tool: ' + error.message);
    }
};

module.exports = {
  fetchAllTools,
  fetchToolById,
  findToolsByDescription,
  createTool,
};
