const { house, user } = require("../models");

exports.index = async (req, res) => {
  try {
    const users = await user.findAll({
      include: [
        {
          model: house,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    });
    res.send({ data: users });
  } catch (error) {
    console.log(error);
  }
};
