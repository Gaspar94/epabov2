class CompradorService {
    constructor(CompradorModel) {
        this.compradorModel = CompradorModel;
    }

    async find(query, select) {
        const params = {
            where: query,
        };
        if (select) {
            params.attributes = select.split(",");
        }
        return this.compradorModel.findAll(params);
    }

    async findById(id) {
        return this.compradorModel.findOne({ where: { id: parseInt(id) } });
    }

    async create(data) {
        return this.compradorModel.create(data);
    }

    async updateById(id, data) {
        return this.compradorModel.update(data, { where: { id: id } });
    }

    async deleteById(id) {
        return this.compradorModel.destroy({ where: { id: id } });
    }
}

module.exports = CompradorService;