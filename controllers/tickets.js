const Flight = require('../models/flights');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};


function newTicket(req, res) {
        res.render('ticket/new', {
        title: 'Add Tickets',
        flights: req.params.id,
    })
}


async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticketNew = req.body;
    ticketNew.flight = flight;
    const ticket = await Ticket.create(ticketNew);
    ticket.save(function (err) {
        if (err) return  res.render('ticket/new');
        console.log(ticket)
        res.redirect(`/flights/${flight._id}`);
    });
}