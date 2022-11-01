'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Daniel Cavalcanti',
      email: 'danielcavalcanti8000@gmail.com',
      password: 'daniel123',
      created: '2022-10-27T00:00:00',
    }, {
      name: 'Isadora Maiara',
      email: 'isadoramayara@gmail.com',
      password: 'dora1234',
      created: '2022-10-28T00:01:00',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
