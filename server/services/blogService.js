const Blog = require('../models/mongodb/blogModel');

const createBlog = async (blogData) => {
  try {
    const blog = new Blog(blogData);
    return await blog.save();
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

const getAllBlogs = async () => {
  try {
    return await Blog.find();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

const getBlogById = async (blogId) => {
  try {
    return await Blog.findById(blogId);
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    throw error;
  }
};

const updateBlog = async (blogId, blogData) => {
  try {
    return await Blog.findByIdAndUpdate(blogId, blogData, { new: true });
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

const deleteBlog = async (blogId) => {
  try {
    return await Blog.findByIdAndDelete(blogId);
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
