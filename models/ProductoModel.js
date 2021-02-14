const { DataTypes } = require("sequelize");

const ProductoModel = (sequelize) => {
    const Producto = sequelize.define(
        "Producto",
        {
            nombre: { type: DataTypes.STRING, allowNull: false },
            descripcion: { type: DataTypes.STRING },          
            precioActual: { type: DataTypes.FLOAT, allowNull: false },
        },
        { sequelize }
    );
    return Producto;
};

module.exports = ProductoModel;