import { TicketRepository } from '../repository/TicketRepository';
import TicketDTO from '../dto/TicketDTO';

export const TicketService = {
    getAllTicketsByBpId: (bpId) => {
        try {
            const tickets = TicketRepository.getAllTicketsByBpId(bpId);
            return tickets;
        } catch (error) {
            console.error("Error fetching tickets by BP ID:", error);
            return [];
        }
    },
    saveTicket: (ticket) => {
        try {
            const ticketObj = new TicketDTO(ticket);
            ticketObj.id = TicketRepository.saveTicket(ticketObj.getTicket()).id;
        } catch (error) {
            console.error("Error saving ticket:", error);
        }
    },
    getTicketById: (ticketId) => {
        try {
            const ticket = TicketRepository.getTicketById(ticketId);
            return ticket;
        } catch (error) {
            console.error("Error fetching ticket by ID:", error);
            return undefined;
        }
    }
};
