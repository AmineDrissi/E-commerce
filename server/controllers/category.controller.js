const { request } = require("express");
const { Category } = require("../database.js");

module.exports.addCategory = async (req, res) => {
  try {
    const result = await Category.create({
      ...req.body,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.getAllCategories = async (req, res) => {
  try {
    const result = await Category.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.remove = async (request, res) => {
  try {
    const result = await Category.destroy({ where: { id: request.params.id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.edit = async (req, res) => {
  try {
    const result = await Category.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    
    res.status(404).json(error);
  }
};

module.exports.getCategoryById = async (req, res) => {
  try {
    const result = await Category.findByPk(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};
