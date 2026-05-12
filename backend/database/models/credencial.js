'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Credencial extends Model {

    static associate(models) {

    }
  }
  Credencial.init({
    usuario: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    pass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Credencial',
    tableName: 'Credenciales'
  });
  return Credencial;
};