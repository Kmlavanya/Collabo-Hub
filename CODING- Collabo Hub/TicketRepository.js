import Ticket from "../db/models/Ticket";
const fakeDatabase = {
    tickets: [],
    nextId: 1,
    getAllTicketsByBpId: (bpId) => {
        return fakeDatabase.tickets.filter(ticket => ticket.bpId === bpId);
    },
    saveTicket: (ticketDTO) => {
        const newTicket = new Ticket(ticketDTO);
        newTicket.id = fakeDatabase.nextId++;
        fakeDatabase.tickets.push(newTicket);
        return newTicket;
    },
    getTicketById: (ticketId) => {
        return fakeDatabase.tickets.find(ticket => ticket.id === ticketId);
    },
    // Other database operations can be added here
};

export const TicketRepository = {
    getAllTicketsByBpId: (bpId) => {
        return fakeDatabase.getAllTicketsByBpId(bpId);
    },
    saveTicket: (ticketDTO) => {
        return fakeDatabase.saveTicket(ticketDTO);
    },
    getTicketById: (ticketId) => {
        return fakeDatabase.getTicketById(ticketId);
    }
};