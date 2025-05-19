const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize("cigarshop","root","root",
    {
        dialect:"mysql",
        host:"localhost"

})



sequelize.authenticate()
.then(()=>{console.log("myassra");
})
.catch((err)=>{console.error("erroooor",err);
}) 


const db={}


db.Orders.belongsTo(db.Users, { foreignKey: 'id' });
db.Users.hasMany(db.Orders, { foreignKey: 'id' });

db.Products.belongsToMany(db.Categories, { through: 'Category' });
db.Categories.belongsToMany(db.Products, { through: 'Category' });

db.sequelize=sequelize
db.sequelize=sequelize


db.Products=require("../models/products.js")(sequelize,DataTypes)
db.Orders=require("../models/orders.js")(sequelize,DataTypes)
db.Categories=require("../models/categories.js")(sequelize,DataTypes)
db.Users=require("../models/users.js")(sequelize,DataTypes)









  sequelize.sync()
  .then(()=>{console.log("jawna behy again");
  })
  .catch((err)=>{console.error("tahhhhhhhhhh",err);
  })


module.exports= db
