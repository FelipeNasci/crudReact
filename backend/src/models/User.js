const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {

        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
            },
            
            {
                //conexao com o banco de dados
                sequelize,
            }
        )
    }
}

module.exports = User;