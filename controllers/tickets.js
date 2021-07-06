const Flight = require('../models/flights');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

function addToFlight(req, res){}


function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
        red.render('')
    })
}


function create(req, res) {}