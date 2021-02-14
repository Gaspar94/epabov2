class GastoService {
    constructor(GastoModel) {
        this.gastoModel = GastoModel;
    }

    async find(query, select) {
        const params = {
            where: query,
            include: { association: "producto" }
        };

        if (select) {
            params.attributes = select.split(",");
        }
        return this.gastoModel.findAll(params);
    }

    async findById(id) {
        return this.gastoModel.findOne({ where: { id: parseInt(id) } });
    }

    async create(data) {
        return this.gastoModel.create(data);
    }

    async updateById(id, data) {
        return this.gastoModel.update(data, { where: { id: id } });
    }

    async deleteById(id) {
        return this.gastoModel.destroy({ where: { id: id } });
    }
}

module.exports = GastoService;