const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
let tickets = [];
let customers = [];
let assets = [];
let invoices = [];
let leaves = [];
let onduty = [];

// Ticket HTTP methods
app.get('/tickets', (req, res) => {
    res.json(tickets);
});

app.get('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    const ticket = tickets.find(ticket => ticket.id === ticketId);
    if (ticket) {
        res.json(ticket);
    } else {
        res.status(404).json({ message: 'Ticket not found' });
    }
});

app.post('/tickets', (req, res) => {
    const newTicketData = req.body;
    tickets.push(newTicketData);
    res.status(201).json(newTicketData);
});

app.put('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    const updatedTicketData = req.body;
    const index = tickets.findIndex(ticket => ticket.id === ticketId);
    if (index !== -1) {
        tickets[index] = { ...tickets[index], ...updatedTicketData };
        res.json(tickets[index]);
    } else {
        res.status(404).json({ message: 'Ticket not found' });
    }
});

app.delete('/tickets/:id', (req, res) => {
    const ticketId = req.params.id;
    tickets = tickets.filter(ticket => ticket.id !== ticketId);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});