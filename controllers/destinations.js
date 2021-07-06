const Flight = require('../models/flights');

module.exports = {
    create,
    sort,
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
        flights.destination.push(req.body);
        flights.save(function(err) {
            res.redirect(`/flights/${flights._id}`)
        })
    })
}

function sort(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
        flights.destination.sort(req.body);
        flights.save(function(err){
            res.redirect(`/flights/${flights._id}`)
        })
    })
}
