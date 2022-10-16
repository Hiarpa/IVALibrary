const { Model, DataTypes } = require('sequelize');

class Books extends Model {
    static init(sequelize) {
        super.init({
            bookName: DataTypes.STRING,
            author: DataTypes.STRING,
            numberOfPages: DataTypes.INTEGER,
            copiesAvailable: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Books;