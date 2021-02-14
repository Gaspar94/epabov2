const { DataTypes } = require("sequelize");

const VendedorModel = (sequelize) => {
    const Vendedor = sequelize.define(
        "Vendedor",
        {
            nombre: { type: DataTypes.STRING, allowNull: false },
            ubicacion: { type: DataTypes.STRING, allowNull: false },
        },
        { tableName: "Vendedores"},
        { sequelize }
    );
    return Vendedor;
};

module.exports = VendedorModel;