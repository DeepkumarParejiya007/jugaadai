const toolsService = require('../services/toolsService');

const getAllTools = async (req, res) => {
  try {
    const tools = await toolsService.fetchAllTools();
    res.status(200).json({ success: true, data: tools });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getToolById = async (req, res) => {
  try {
    const { id } = req.params;
    const tool = await toolsService.fetchToolById(id);
    res.status(200).json({ success: true, data: tool });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

const searchTools = async (req, res) => {
  try {
    const { query } = req.query;
    const tools = await toolsService.findToolsByDescription(query);
    res.status(200).json({ success: true, data: tools });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addTool = async (req, res) => {
  try {
    const toolData = req.body;
    const result = await toolsService.createTool(toolData);
    res.status(201).json({ success: true, message: result.message });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllTools,
  getToolById,
  searchTools,
  addTool,
};
