class VendedorService {
    constructor(VendedorModel) {
        this.vendedorModel = VendedorModel;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if (select) {
            params.attributes = select.split(",");
        }
        return this.vendedorModel.findAll(params);
    }
    async findById(id) {
        return this.vendedorModel.findOne({ where: { id: parseInt(id) } });
    }
}

module.exports = VendedorService;
