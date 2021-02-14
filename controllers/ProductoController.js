class ProductoController {
    constructor(ProductoService) {
        this.productoService = ProductoService;
    }

    async find(req, res) {
        const { query } = req;
        let select = "";
        if (query.select) {
            select = query.select;
            delete query.select;
        }
        try {
            const results = await this.productoService.find(query, select);
            if (results) return res.json(results);
            return res.sendStatus(404);
        } catch (e) {
            return res.sendStatus(500);
        }
    }

    async findById(req, res) {
        const { id } = req.params;
        try {
            const producto = await this.productoService.findById(id);
            if (producto) return res.json(producto);
            return res.sendStatus(404);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    }
}

module.exports = ProductoController;