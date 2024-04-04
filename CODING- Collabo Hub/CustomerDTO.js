class CustomerDTO {
    constructor({ id, name, email, phoneNumber, address }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    getCustomer() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            address: this.address
        };
    }
}

export default CustomerDTO;