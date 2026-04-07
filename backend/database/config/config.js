import config from "../../servicios/config.js";

export default {
    development: {
        username: config.db.user,
        password: config.db.pass,
        database: config.db.name,
        host: config.db.host,
        port: config.db.port,
        dialect: "mysql",
        migrationStorage: "sequelize",
        migrationStorageTableName: "sequelize_historico",
        seederStorage: "sequelize",
        seederStorageTableName: "sequelize_historico"
    },
    test: {
        username: config.db.user,
        password: config.db.pass,
        database: config.db.name,
        host: config.db.host,
        port: config.db.port,
        dialect: "mysql",
        migrationStorage: "sequelize",
        migrationStorageTableName: "sequelize_historico",
        seederStorage: "sequelize",
        seederStorageTableName: "sequelize_historico"
    },
    production: {
        username: config.db.user,
        password: config.db.pass,
        database: config.db.name,
        host: config.db.host,
        port: config.db.port,
        dialect: "mysql",
        migrationStorage: "sequelize",
        migrationStorageTableName: "sequelize_historico",
        seederStorage: "sequelize",
        seederStorageTableName: "sequelize_historico"
    }
}