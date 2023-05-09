const Record = require("../models/Record");

class RecordService {
    async getRecords() {
        const records = await Record.find();

        return records;
    };

    async createRecord(record) {
        const createdRecord = await Record.create(record);

        return createdRecord;
    };

    async update(record) {
        if (!record._id) {
            throw new Error('Record not found');
        }

        const updatedRecord = await Record.findByIdAndUpdate(record._id, record, { new: true });

        return updatedRecord;
    };

    async delete(id) {
        if (!id) {
            throw new Error('Record not found');
        }

        const record = await Record.findByIdAndDelete(id);

        return record;
    };
}

module.exports = new RecordService();