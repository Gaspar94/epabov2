const { Op, Sequelize } = require("sequelize");
const sequelize = new Sequelize("epabo", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

const CompradorModel = require("./models/CompradorModel");
const GastoModel = require("./models/GastoModel");
const ProductoModel = require("./models/ProductoModel");
const VendedorModel = require("./models/VendedorModel");
const CategoriaModel = require("./models/CategoriaModel");
const CompradorModelInstance = CompradorModel(sequelize);
const GastoModelInstance = GastoModel(sequelize);
const ProductoModelInstance = ProductoModel(sequelize);
const VendedorModelInstance = VendedorModel(sequelize);
const CategoriaModelInstance = CategoriaModel(sequelize);

GastoModelInstance.belongsTo(CompradorModelInstance, { as: "comprador" });
GastoModelInstance.belongsTo(ProductoModelInstance, { as: "producto" });
ProductoModelInstance.belongsTo(CategoriaModelInstance, { as: "categoria" });
ProductoModelInstance.belongsTo(VendedorModelInstance, { as: "vendedor" });

sequelize.sync({ force: false });

const CompradorController = require("./controllers/CompradorController");
const CompradorService = require("./services/CompradorService");

const CompradorServiceInstance = new CompradorService(CompradorModelInstance);
const CompradorControllerIntance = new CompradorController(CompradorServiceInstance);

const GastoController = require("./controllers/GastoController");
const GastoService = require("./services/GastoService");

const GastoServiceInstance = new GastoService(GastoModelInstance);
const GastoControllerIntance = new GastoController(GastoServiceInstance);

const ProductoController = require("./controllers/ProductoController");
const ProductoService = require("./services/ProductoService");

const ProductoServiceInstance = new ProductoService(ProductoModelInstance);
const ProductoControllerIntance = new ProductoController(ProductoServiceInstance);

const VendedorController = require("./controllers/VendedorController");
const VendedorService = require("./services/VendedorService");

const VendedorServiceInstance = new VendedorService(VendedorModelInstance);
const VendedorControllerIntance = new VendedorController(VendedorServiceInstance);

const CategoriaController = require("./controllers/CategoriaController");
const CategoriaService = require("./services/CategoriaService");
const { query } = require("express");

const CategoriaServiceInstance = new CategoriaService(CategoriaModelInstance);
const CategoriaControllerIntance = new CategoriaController(CategoriaServiceInstance);

const routes = (app) => {
    app.get("/compradores", (req, res) => {
        CompradorControllerIntance.find(req, res);
    });

    app.get("/comprador/:id", (req, res) => {
        CompradorControllerIntance.findById(req, res);
    });

    app.post("/comprador", (req, res) =>
        CompradorControllerIntance.create(req, res)
    );

    app.put("/comprador/:id", (req, res) => {
        CompradorControllerIntance.update(req, res);
    });

    app.delete("/comprador/:id", (req, res) => {
        CompradorControllerIntance.deleteById(req, res);
    });

    app.get("/gastos", (req, res) => {
        GastoControllerIntance.find(req, res);
    });

    app.get("/gastos/:id", (req, res) => {
        req.query = { compradorId: req.params.id }
        GastoControllerIntance.find(req, res);
    });

    app.get("/gasto/:id", (req, res) => {
        GastoControllerIntance.findById(req, res);
    });

    app.post("/gasto", (req, res) =>
        GastoControllerIntance.create(req, res)
    );

    app.put("/gasto/:id", (req, res) => {
        GastoControllerIntance.update(req, res);
    });

    app.delete("/gasto/:id", (req, res) => {
        GastoControllerIntance.deleteById(req, res);
    });

    app.get("/productos", (req, res) => {
        ProductoControllerIntance.find(req, res);
    });

    app.get("/productos/oportunidades", (req, res) => {
        req.query = { precioActual: {[Op.lte]: Sequelize.col('precioReferencia')} }
        ProductoControllerIntance.find(req, res);
    });

    app.get("/producto/:id", (req, res) => {
        ProductoControllerIntance.findById(req, res);
    });

    app.get("/vendedores", (req, res) => {
        VendedorControllerIntance.find(req, res);
    });

    app.get("/vendedor/:id", (req, res) => {
        VendedorControllerIntance.findById(req, res);
    });

    app.get("/categorias", (req, res) => {
        CategoriaControllerIntance.find(req, res);
    });

    app.get("/categoria/:id", (req, res) => {
        CategoriaControllerIntance.findById(req, res);
    });

};

module.exports = routes;