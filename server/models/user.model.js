module.exports = (connection, DataTypes)=>{
    const User = connection.define("User",{
        email:{
            type: DataTypes.STRING,
            unique:true,
            required:true,
            validate:{
                isEmail:true,
            }
        },
        password:{
            type: DataTypes.STRING,
            required:true,
            unique:false,
        },
        firstName:{
            type: DataTypes.STRING,
            unique:false,
            required:true,
        },
        lastName:{
            type: DataTypes.STRING,
            unique:false,
            required:true,
        },
        address:{
            type: DataTypes.STRING,
            unique:false,
        },
        role:{
            type: DataTypes.ENUM,
            values:["admin","seller","client"],
            defaultValue:"client"
        },
        wishlist:{
            type: DataTypes.JSON,
            defaultValue:[]
        },
        cartlist:{
            type: DataTypes.JSON,
            defaultValue:[]
        }
    })    
    return User;
}