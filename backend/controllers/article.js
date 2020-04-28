const { article, user } = require("../models");

exports.create = async (req, res) => {
  req.body.userId = req.user;
  if (req.role === 1) {
    const newArticle = await article.create(req.body);
    const get = await article.findOne({
      where: { id: newArticle.id },
      include: {
        model: user,
        attributs: ["fullname"]
      }
    });
    res.status(201).send({ data: get });
  }
};
