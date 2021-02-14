class CompradorController {
    constructor(CompradorService) {
        this.compradorService = CompradorService;
    }

    async find(req, res) {
        const { query } = req;
        let select = "";
        if (query.select) {
            select = query.select;
            delete query.select;
        }
        try {
            const results = await this.compradorService.find(query, select);
            if (results) return res.json(results);
            return res.sendStatus(404);
        } catch (e) {
            return res.sendStatus(500);
        }
    }

    async findById(req, res) {
        const { id } = req.params;
        try {
            const comprador = await this.compradorService.findById(id);
            if (comprador) return res.json(comprador);
            return res.sendStatus(404);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    }

    async create(req, res) {
        const { body } = req;
        try {
            const created = await this.compradorService.create(body);
            if (created) return res.status(201).json(created);
            return res.sendStatus(500);
        } catch (e) {
            const errorsLog = e.errors.map((error) => error.message);
            return res.status(500).json({ errors: errorsLog });
        }
    }

    async update(req, res) {
        const { body, params } = req;
        const { id } = params;

        try {
            const updated = await this.compradorService.updateById(id, body);
            if (updated) return res.sendStatus(200);
            return res.sendStatus(404);
        } catch (e) {
            const errorsLog = e.errors.map((error) => error.message);
            return res.status(500).json({ errors: errorsLog });
        }
    }

    async deleteById(req, res) {
        const { id } = req.params;

        try {
            const deleted = await this.compradorService.deleteById(id);
            if (deleted) return res.sendStatus(200);
            return res.sendStatus(404);
        } catch (e) {
            const errorsLog = e.errors.map((error) => error.message);
            return res.status(500).json({ errors: errorsLog });
        }
    }
}

module.exports = CompradorController;