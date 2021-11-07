const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const relations = require("./relations");
const users = require("./users");

const groups = sequelize.define("groups",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    dataset_route: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    time_creation: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW
    }
});

module.exports = groups;