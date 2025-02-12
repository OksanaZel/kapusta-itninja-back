const { Unauthorized } = require('http-errors');
const { User } = require('../../models');
const { sendSuccessResponse } = require('../../utils');

const current = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    throw new Unauthorized('Not authorized');
  }

  sendSuccessResponse(res, { user });
};

module.exports = current;
