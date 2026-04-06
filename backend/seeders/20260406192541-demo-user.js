'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
}
