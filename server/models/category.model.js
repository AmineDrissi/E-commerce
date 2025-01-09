module.exports = (connection,DataTypes)=>{
    const category = connection.define("category",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        image:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    })
    return category;
}