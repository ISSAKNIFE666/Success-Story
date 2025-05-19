module.exports=(Sequelize,DataTypes)=>{
    const Users = Sequelize.define(
        "users",{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING(255),
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(255)
            },
            address: {
                type: DataTypes.TEXT
            },
            phone: {
                type: DataTypes.STRING(20)
            }
        }
    ) 

    return Users
}