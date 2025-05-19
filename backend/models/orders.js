module.exports = (Sequelize, DataTypes) => {
    const Orders = Sequelize.define("orders", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        total: {
            type: DataTypes.DECIMAL(10, 2)
        },
        status: {
            type: DataTypes.STRING(50),
            defaultValue: 'pending'
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return Orders;
};