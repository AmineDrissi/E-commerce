const { Product } = require("../database.js");

module.exports.getAllProducts = async (req, res) => {
  try {
    const result = await Product.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    const result = await Product.create({ ...req.body });
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const result = await Product.findByPk(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const result = await Product.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    const result = await Product.destroy({ where: { id: req.params.id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllCategoryProducts = async (req, res) => {
  try {
    const result = await Product.findAll({
      where: { categoryId: req.params.id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
