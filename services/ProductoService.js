class ProductoService {
    constructor(ProductoModel) {
        this.productoModel = ProductoModel;
    }

    async find(query, select) {
        const params = {
            where: query,
            include: [{ all: true}]
        };
        if (select) {
            params.attributes = select.split(",");
        }
        return this.productoModel.findAll(params);
    }
    async findById(id) {
        return this.productoModel.findOne({ where: { id: parseInt(id) } });
    }
}

module.exports = ProductoService;