import { InvoiceRepository } from '../repository/InvoiceRepository';
import InvoiceDTO from '../dto/InvoiceDTO';

export const InvoiceServiceImplement = {
    getAllInvoices() {
        return InvoiceRepository.getAllInvoices();
    },
    getInvoiceById(invoiceId) {
        return InvoiceRepository.getInvoiceById(invoiceId);
    },
    saveInvoice(invoice) {
        const invoiceDTO = new InvoiceDTO(invoice);
        const invoiceData = invoiceDTO.getInvoice();
        return InvoiceRepository.saveInvoice(invoiceData);
    },
    updateInvoice(invoiceId, invoice) {
        const invoiceDTO = new InvoiceDTO(invoice);
        const invoiceData = invoiceDTO.getInvoice();
        return InvoiceRepository.updateInvoice(invoiceId, invoiceData);
    },
    deleteInvoice(invoiceId) {
        return InvoiceRepository.deleteInvoice(invoiceId);
    }
};