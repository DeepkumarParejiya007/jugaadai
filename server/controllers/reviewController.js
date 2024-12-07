const reviewService = require('../services/reviewService');

const getReviewsByToolId = async (req, res) => {
    const { id } = req.params;
    try {
      const reviews = await reviewService.getReviewsByToolId(id);
      res.status(200).json(reviews);
    } catch (err) {
      console.error(`Controller error fetching reviews for tool ID ${id}:`, err);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};
  
const addReview = async (req, res) => {
    const { toolId, userId, rating, comment } = req.body;
    try {
      await reviewService.addReview(toolId, userId, rating, comment);
      res.status(201).json({ message: 'Review added successfully' });
    } catch (err) {
      console.error('Controller error adding a review:', err);
      res.status(500).json({ error: 'Failed to add review' });
    }
};

module.exports = {
    getReviewsByToolId,
    addReview,
};