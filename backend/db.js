import config from './config.js'
import { Sequelize } from 'sequelize';
import User from './models/user.js'

const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, {
  dialect: 'mysql',
  host: config.db.host,
  port: config.db.port
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');


} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default {
  getUsers: async function() {
    return User.findAll();
  }
}
