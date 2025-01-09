module.exports = (connection,DataTypes)=>{
    return connection.define("product",
        {
            name:{
                type: DataTypes.STRING,
                allowNull: true
            },
            price:{
                type: DataTypes.FLOAT,
                allowNull: true
            },
            brand:{
                type: DataTypes.STRING,
                allowNull: true
            },
            model:{
                type: DataTypes.STRING,
                allowNull: true
            },
            releaseDate:{
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            dimenstions:{
                type: DataTypes.JSON,
                allowNull: true
            },
            weight:{
                type: DataTypes.FLOAT,
                allowNull: true
            },
            batteryCapacity:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            coolingCapacity:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            coolingSystem:{
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            noiseLevel:{
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }
    )
}