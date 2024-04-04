class TicketDTO {
    constructor({ id, title, description, bpId, customerId, workflow }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.bpId = bpId;
        this.customerId = customerId;
        this.workflow = workflow;
    }

    getTicket() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            bpId: this.bpId,
            customerId: this.customerId,
            workflow: this.workflow
        };
    }
}

export default TicketDTO;