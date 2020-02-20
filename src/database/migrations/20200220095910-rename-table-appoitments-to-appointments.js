

module.exports = {
  up: (queryInterface) => {
      return queryInterface.renameTable('appoitments', 'appointments');
  },

  down: (queryInterface) => {
      return queryInterface.renameTable('appointments', 'appoitments');

  }
};
