'use strict';
// Insercion de datos en la base de datos
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     {
         firstName: 'Jane',
         lastName: 'Doe',
         email: 'jane@example.com',
         createdAt: new Date(),
         updatedAt: new Date(),
     },
     {
         firstName: 'Peter',
         lastName: 'Parker',
         email: 'peter@example.com',
         createdAt: new Date(),
         updatedAt: new Date(),
     },
     {
         firstName: 'Clark',
         lastName: 'Kent',
         email: 'clark@example.com',
         createdAt: new Date(),
         updatedAt: new Date(),
     },
     {
         firstName: 'Barry',
         lastName: 'Alen',
         email: 'barry@example.com',
         createdAt: new Date(),
         updatedAt: new Date(),
     },
    ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
}
