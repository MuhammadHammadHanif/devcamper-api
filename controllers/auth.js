const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// Model
const User = require('../models/User');

// @desc    Register User
// @route   GET /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  // Create User
  await User.create(req.body);

  res.status(201).json({ success: true });
});
