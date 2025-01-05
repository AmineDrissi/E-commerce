const { User } = require("../database.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { where } = require("sequelize");

const secret_key = "amine's secret key";
module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);

    res.status(404).json(error);
  }
};

module.exports.register = async (req, res) => {
  try {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        res.status(500).json(err);
      } else {
        const user = User.create({
          ...req.body,
          password: hash,
        });
        res.status(200).json(user);
      }
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    const del = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(del);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.edit = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      const result = await User.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(result);
    } else {
      const encrypted = bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(500).json(err);
        } else {
          try {
            const result = await User.update(
              { ...req.body, password: hash },
              { where: { id: req.params.id } }
            );
            res.status(200).json(result);
          } catch (error) {
            res.status(500).json(error);
          }
        }
      })
    }
  } catch (error) {
    res.status(500).json(error);
  }
};



