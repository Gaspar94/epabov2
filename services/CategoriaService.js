class CategoriaService {
    constructor(CategoriaModel) {
        this.categoriaModel = CategoriaModel;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if (select) {
            params.attributes = select.split(",");
        }
        return this.categoriaModel.findAll(params);
    }
    async findById(id) {
        return this.categoriaModel.findOne({ where: { id: parseInt(id) } });
    }
}

module.exports = CategoriaService;