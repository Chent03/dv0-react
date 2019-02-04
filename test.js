let fs = require('fs');
let fastcsv = require('fast-csv');

const mongoose = require('mongoose');

require('./models/Loans');

mongoose.connect("mongodb://ash:pokemon1122@ds221435.mlab.com:21435/dvo-dev");

let readableStreamInput = fs.createReadStream('./loanstats.csv');
const Loan = mongoose.model('loans');

fastcsv
    .fromStream(readableStreamInput, {headers: true})
    .on('data', async (data) => {
        const {int_rate, grade, home_ownership, annual_inc } = data;
        const loan = new Loan({
            IntRate: int_rate,
            Grade: grade,
            AnnualInc: annual_inc,
            Home: home_ownership
        })
        try {
            await loan.save();
        } catch(e) {
            console.log(e);
        }
    }).on('end', () => {
        console.log('its done');
    })