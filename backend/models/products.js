module.exports=(Sequelize,DataTypes)=>{
    const Products = Sequelize.define(
        "products",{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT
            },
            price: {
                type: DataTypes.DECIMAL(10, 2)
            },
            stock: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            category: {
                type: DataTypes.STRING(50)  // e.g., 'Cuban', 'Dominican', 'Accessories'
            },
            image_url: {
                type: DataTypes.STRING(255)
            }
        }
    ) 

    return Products
}