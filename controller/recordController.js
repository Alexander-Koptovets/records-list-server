const RecordService = require('../service/recordService');

class RecordController {
    async getRecords(req, res) {
        try {
            const records = await RecordService.getRecords();

            return res.json(records);
        } catch (e) {
            console.log(e);
            return res.status(400).json(e.message);
        }
    };

    async createRecord(req, res) {
        try {
            const record = await RecordService.createRecord(req.body);

            return res.json(record);
        } catch (e) {
            console.log(e);
            res.status(500).json(e.message);
        }
    };

    async update(req, res) {
        try {
            const updatedRecord = await RecordService.update(req.body);

            return res.json(updatedRecord);
        } catch (e) {
            console.log(e);
            res.status(500).json(e.message);
        }
    };

    async delete(req, res) {
        try {
            const record = await RecordService.delete(req.params.id);

            return res.json(record);
        } catch (e) {
            console.log(e);
            res.status(500).json(e.message);
        }
    };
}

module.exports = new RecordController();