'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cars', [{
      id: 1,
      name: 'Onix',
      model: 'MPFI LT',
      color: 'Preto',
      brand: 'Chevrolet',
      price: 56699,
      year: 2019,
      image: 'https://images.kavak.services/images/208694/EXTERIOR-frontSidePilotNear-1666708919737.jpeg?d=540x310',
      published: '2022-10-27T00:00:40',
      user_id: 1,
    }, {
      id: 2,
      name: 'City',
      model: 'EX',
      brand: 'Honda',
      color: 'Preto',
      price: 75299,
      year: 2017,
      image: 'https://images.kavak.services/images/207087/EXTERIOR-frontSidePilotNear-1666038248023.jpeg?d=540x310',
      published: '2022-10-27T00:00:45',
      user_id: 1,
    }, {
      id: 3,
      name: 'Fusion',
      model: 'TITANIUM AWD',
      brand: 'Ford',
      color: 'Preto',
      price: 102699,
      year: 2017,
      image: 'https://images.kavak.services/images/157517/EXTERIOR-frontSidePilotNear-1644656482537.jpeg?d=540x310',
      published: '2022-10-27T00:00:45',
      user_id: 1,
    }, {
      id: 4,
      name: 'V40',
      model: 'T5 R DESIGN TURBO',
      brand: 'Volvo',
      color: 'Preto',
      price: 105699,
      year: 2016,
      image: 'https://images.kavak.services/images/205896/EXTERIOR-frontSidePilotNear-1664913784005.jpeg?d=540x310',
      published: '2022-10-27T00:00:50',
      user_id: 1,
    }, {
      id: 5,
      name: '320i',
      model: 'SPORT TURBO ACTIVE',
      brand: 'Bmw',
      color: 'Branco',
      price: 114199,
      year: 2015,
      image: 'https://images.kavak.services/images/186599/EXTERIOR-frontSidePilotNear-1652985935994.jpeg?d=540x310',
      published: '2022-10-27T00:00:50',
      user_id: 2,
    }, {
      id: 6,
      name: 'A5',
      model: 'TFSI SPORTBACK PRESTIGE',
      brand: 'Audi',
      color: 'Branco',
      price: 200599,
      year: 2019,
      image: 'https://images.kavak.services/images/186618/EXTERIOR-frontSidePilotNear-1653329890467.jpeg?d=540x310',
      published: '2022-10-27T00:00:50',
      user_id: 2,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
