const { DataTypes } = require("sequelize");

const CategoriaModel = (sequelize) => {
    const Categoria = sequelize.define(
        "Categoria",
        {
            nombre: { type: DataTypes.STRING, allowNull: false },
            descripcion: {type: DataTypes.STRING, allowNull:false},
            precioReferencia: {type: DataTypes.FLOAT, allowNull:false},
        },
        { tableName: "Categorias"},
        { sequelize }
    );
    return Categoria;
};

module.exports = CategoriaModel;
