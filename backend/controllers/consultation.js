const { consultation } = require("../models");

exports.consul = async (req, res) => {
  try {
    req.body.userId = req.user;

    console.log(req.role)

    if (req.role === 0) {
      const newConsul = await consultation.create(req.body);
      const consul = await consultation.findOne({
        where: { id: newConsul.id }
      });
      res.status(200).send({ data: consul });
    } else {
      res.status(405).send({ message: "Failure" });
    }
  } catch (error) {
    res.status(500).send({ message: "Unknown Request" });
    console.log(error);
  }
};
