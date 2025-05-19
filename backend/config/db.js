const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("cigarshop", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});






sequelize.authenticate()
    .then(() => console.log('Database connection has been established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err));




const db = {};




db.Products = require("../models/products.js")(sequelize, DataTypes);
db.Orders = require("../models/orders.js")(sequelize, DataTypes);
db.Categories = require("../models/categories.js")(sequelize, DataTypes);
db.Users = require("../models/users.js")(sequelize, DataTypes);






db.Orders.belongsTo(db.Users, { foreignKey: 'user_id' });
db.Users.hasMany(db.Orders, { foreignKey: 'user_id' });

db.Orders.belongsTo(db.Products, { foreignKey: 'product_id' });
db.Products.hasMany(db.Orders, { foreignKey: 'product_id' });




// sequelize.sync({ alter: true })
//     .then(() => console.log('Database synchronized successfully.'))
//     .catch((err) => console.error('Error synchronizing database:', err));






db.sequelize = sequelize;




module.exports = db; 