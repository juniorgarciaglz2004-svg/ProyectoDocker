'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Credenciales', [{
        usuario: 'demo',
        pass: '$2b$10$AYdzOq.PromgHAhXzgqtzui6a0iDHdSs.DYXUPeTJLBTUY3eZQQQO',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        usuario: 'test',
        pass: '$2b$10$heWzkHacxT6OheZPm.UezeWGH9lzR.2mn0cenuKGSe8hnhTVohmV6',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        usuario: 'otro',
        pass: '$2b$10$QvcOs6goXS/pRZUsEa4hQ.VgEBjNjwa8mpAgb4MH8tIVgJYPoOiOC',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    ], {});
}

export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Credenciales', null, {});
}

