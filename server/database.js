const {DataTypes , Sequelize} = require("sequelize")


const connection = new Sequelize("commerce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});


try {
    connection.authenticate()
    // connection.sync({force: true});
} catch (error) {
    console.log(error);
}

const User = require("./models/user.model.js")(connection,DataTypes)
const Category = require("./models/category.model.js")(connection,DataTypes)
const Product = require("./models/product.model.js")(connection,DataTypes)

Product.belongsTo(Category, {foreignKey: 'categoryId'})
Category.hasMany(Product)





const db={}
db.User = User
db.Category = Category
db.Product = Product

module.exports = db