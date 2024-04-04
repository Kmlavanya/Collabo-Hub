import db from '../../db'; // Assuming this is your database connection
export const InvoiceRepository = {
    getAllInvoices() {
        return db.invoices.findAll();
    },
    getInvoiceById(invoiceId) {
        return db.invoices.findByPk(invoiceId);
    },
    saveInvoice(invoiceData) {
        return db.invoices.create(invoiceData);
    },
    updateInvoice(invoiceId, invoiceData) {
        return db.invoices.update(invoiceData, {
            where: { id: invoiceId }
        });
    },
    deleteInvoice(invoiceId) {
        return db.invoices.destroy({
            where: { id: invoiceId }
        }); }};