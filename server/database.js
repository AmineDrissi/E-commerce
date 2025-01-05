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



const db={}
db.User = User

module.exports = db