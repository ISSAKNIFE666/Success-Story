const {Sequelize, DataTypes } = require("sequelize")

module.exports=(Sequelize)=>{
    const Categories = Sequelize.define(
        "categories",{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT
            }
        }
    ) 

    return Categories
}