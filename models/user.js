const sequelize = require("../config/config");

module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        firstName: type.STRING,
        lastName: type.STRING,
        password: type.STRING,
        email: type.STRING,
        profilePicture: type.STRING
    });
}