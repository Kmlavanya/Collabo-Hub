export default class LeaveDTO {
    constructor(leave) {
        this.id = leave.id;
        this.type = leave.type;
        this.startDate = leave.startDate;
        this.endDate = leave.endDate;
        // Add more properties as needed
    }

    getLeave() {
        return {
            id: this.id,
            type: this.type,
            startDate: this.startDate,
            endDate: this.endDate
            // Map other properties accordingly
        };
    }
}