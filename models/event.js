'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, StageEvent }) {
        Event.belongsToMany (Stage, {
            foreignKey: "event_id",
            as: "stages",
            through: StageEvent
        })
    }
      // define association here
    }
  }
  Event.init({
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
  });
  return Event;
;