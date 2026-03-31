const Sequelize = require('sequelize')

const sequelize = new Sequelize('proyecto', 'root', 'toor', {
//    host: 'localhost',
//    port: 3306,
    dialect: 'mysql'
});

async function myFunction() {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}


await myFunction();

console.log("Another task.");

