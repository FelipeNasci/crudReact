const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {

        super.init(
            {
                street: DataTypes.STRING,
                number: DataTypes.INTEGER,
            },

            {
                sequelize,
            }
        )
    }
}

module.exports = Address;