const { DataTypes } = require("sequelize");

const CompradorModel = (sequelize) => {
    const Comprador = sequelize.define(
        "Comprador",
        {
            nombre: { type: DataTypes.STRING, unique: true, allowNull: false },
            limite: { type: DataTypes.FLOAT, allowNull: false },
        },
        { tableName: "Compradores"},
        { sequelize }
    );
    return Comprador;
};

module.exports = CompradorModel;