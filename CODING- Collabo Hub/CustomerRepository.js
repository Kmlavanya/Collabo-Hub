import db from '../../db'; // Assuming this is your database connection

export const CustomerRepository = {
    getAllCustomers() {
        return db.customers.findAll();
    },
    getCustomerById(customerId) {
        return db.customers.findByPk(customerId);
    },
    saveCustomer(customerData) {
        return db.customers.create(customerData);
    },
    updateCustomer(customerId, customerData) {
        return db.customers.update(customerData, {
            where: { id: customerId }
        });
    },
    deleteCustomer(customerId) {
        return db.customers.destroy({
            where: { id: customerId }
        });
    }
};
