class CategoriaController {
    constructor(CategoriaService) {
        this.categoriaService = CategoriaService;
    }

    async find(req, res) {
        const { query } = req;
        let select = "";
        if (query.select) {
            select = query.select;
            delete query.select;
        }
        try {
            const results = await this.categoriaService.find(query, select);
            if (results) return res.json(results);
            return res.sendStatus(404);
        } catch (e) {
            return res.sendStatus(500);
        }
    }

    async findById(req, res) {
        const { id } = req.params;
        try {
            const categoria = await this.categoriaService.findById(id);
            if (categoria) return res.json(categoria);
            return res.sendStatus(404);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    }
}

module.exports = CategoriaController;