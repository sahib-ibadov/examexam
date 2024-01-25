const { Back } = require("../models/Back.model");

const BackController = {
  getAll: async (req, res) => {
    try {
      const backs = await Back.find({});
      res.status(202).send(backs);
    } catch (error) {
      res.status(404).send("error");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const back = await Back.findById(id);
      res.status(201).send(back);
    } catch (error) {
      res.status(404).send("getbyid  error");
    }
  },
  add: async (req, res) => {
    try {
      const { image, title, price, decs } = req.body;
      const NewBack = new Back({ image, price, title, decs });
      await NewBack.save();
      res.status(204).send(NewBack);
    } catch (error) {
      res.status(404).send("add  error");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const Deleteee = await Back.findByIdAndDelete(id);
      res.send(Deleteee);
    } catch (error) {
      res.send("delet  error");
    }
  },
};
module.exports = { BackController };
