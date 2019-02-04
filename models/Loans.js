const mongoose = require('mongoose');
const { Schema } = mongoose;

const loanSchema = new Schema({
    IntRate: String,
    Grade: String,
    AnnualInc: String,
    Home: String
})

mongoose.model('loans', loanSchema);