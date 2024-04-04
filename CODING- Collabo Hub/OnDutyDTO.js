export default class ondutyDTO {
    constructor(onduty) {
        this.id = onduty.id;
        this.type = onduty.type;
        this.startDate = onduty.startDate;
        this.endDate = onduty.endDate;
        // Add more properties as needed
    }
getOnduty() {
        return {
            id: this.id,
            type: this.type,
            startDate: this.startDate,
            endDate: this.endDate
            // Map other properties accordingly
        };
    }
}