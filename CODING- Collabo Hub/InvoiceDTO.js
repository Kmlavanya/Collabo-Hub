export default class InvoiceDTO {
    constructor(invoice) {
        this.id = invoice.id;
        this.invoiceDate = invoice.invoiceDate;
        this.dueDate = invoice.dueDate;
        // Add more properties as needed
    }

    getInvoice() {
        return {
            id: this.id,
            invoiceDate: this.invoiceDate,
            dueDate: this.dueDate
            // Map other properties accordingly
        };
    }
}