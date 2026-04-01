import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import { Sequelize, DataTypes } from 'sequelize';

console.log(`host = ${process.env.BD_HOST}`)

const sequelize = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PWD, {
    dialect: 'mysql',
    host: process.env.BD_HOST,
    port: process.env.BD_PORT
});

const students = sequelize.define(
  'students',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  },
);

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');



    const resultado = await students.findAll();
    console.log(resultado);
    console.log(JSON.stringify(resultado, null, 2));
    

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

await main();