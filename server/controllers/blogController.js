const blogService = require('../services/blogService');

const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const blog = await blogService.createBlog(blogData);
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blogService.getBlogById(blogId);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogData = req.body;
    const updatedBlog = await blogService.updateBlog(blogId, blogData);
    if (updatedBlog) {
      res.status(200).json(updatedBlog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog', error });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await blogService.deleteBlog(blogId);
    if (deletedBlog) {
      res.status(200).json({ message: 'Blog deleted successfully' });
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
