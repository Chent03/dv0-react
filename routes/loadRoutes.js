const loan = require('../controller').loan;

module.exports = app => {
    app.get('/api/dvo/loan/', async(req, res) => {
        let stats = await loan.getLoanStats();
        res.status(200).send(stats);
    });
}