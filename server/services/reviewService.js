const reviewModel = require('../models/oracle-sql/reviewModel');

const getReviewsByToolId = async (toolId) => {
  try {
    const reviews = await reviewModel.getReviewsByToolId(toolId);
    return reviews;
  } catch (err) {
    console.error(`Service error while fetching reviews for tool ID ${toolId}:`, err);
    throw new Error('Failed to fetch reviews');
  }
};

const addReview = async (toolId, userId, rating, comment) => {
  try {
    await reviewModel.addReview(toolId, userId, rating, comment);
  } catch (err) {
    console.error('Service error while adding a review:', err);
    throw new Error('Failed to add review');
  }
};

module.exports = {
  getReviewsByToolId,
  addReview,
};
