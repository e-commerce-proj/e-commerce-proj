const { Sequelize, DataTypes, HasMany } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});


const User = sequelize.define('User', {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UserType: {
    type: DataTypes.ENUM('User', 'Seller'),
    defaultValue: 'User',
  },
 
  ImageUrl: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: true
  },
})







const Payments = sequelize.define('Payments', {

  Amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  PaymentDate: {
    type: DataTypes.DATE,
  },
});


  




const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  ImageUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
User.hasMany(Payments, { foreignKey: 'userId' });
Payments.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Product, { foreignKey: 'sellerId' });
Product.belongsTo(User, { foreignKey: 'sellerId' });



module.exports = {
  User,
  Payments,
  Product
};

// sequelize.sync()
//   .then(() => {
//     console.log('Database and tables created!');
//   })
//   .catch((error) => {
//     console.error('Error creating database and/or tables:', error);
//   });
