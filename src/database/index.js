import Sequelize from "sequelize";

import User from '../app/models/User'
import File from '../app/models/File'
import Appointment from "../app/models/Appointment";

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(xModel => xModel.init(this.connection))
      .map(xModel => xModel.associate && xModel.associate(this.connection.models) );
  }

}

export default new Database();
