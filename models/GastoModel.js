const Sequelize = require("sequelize");

const GastoModel = (sequelize) => {
    const Gasto = sequelize.define(
        "Gasto",
        {
            fecha: { type: Sequelize.DataTypes.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
            precio: { type: Sequelize.DataTypes.FLOAT, allowNull:false },
        },
        { sequelize }
    );
    return Gasto;
};

module.exports = GastoModel;