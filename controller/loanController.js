const mongoose = require('mongoose');
const Loan = mongoose.model('loans');

module.exports = {
    async getLoanStats() {
        try {
            return await Loan.find();
        } catch(e) {
            console.log(e);
        }
    }
}