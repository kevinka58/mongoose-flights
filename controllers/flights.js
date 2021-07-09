const Flight = require('../models/flights');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    show,
    create,
    index
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {
            flights,
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
        Ticket.find({flight: flights.id}, function(err, tickets) {
        res.render('flights/show', {title: 'Flight Details', flights, tickets })
      })
    })
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err){
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('flights/new')
    })
}