

module.exports = {
  up: (queryInterface) => {

      return queryInterface.renameColumn('appoitments', 'user', 'user_id');

  },

  down: (queryInterface) => {
      return queryInterface.renameColumn('appoitments', 'user_id', 'user');
  }
};
