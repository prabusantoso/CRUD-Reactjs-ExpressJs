'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Siswas', [{
      nama: 'Haidar',
      alamat: 'Lampung',
      kelas: 12,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      nama: 'Prabu',
      alamat: 'Bandar Lampung',
      kelas: 11,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      nama: 'Elfin',
      alamat: 'Bandar Lampung',
      kelas: 11n,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Siswas', null, {});
  }
};
