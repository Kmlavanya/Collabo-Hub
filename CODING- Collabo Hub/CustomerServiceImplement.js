import { CustomerRepository } from '../repository/CustomerRepository';
import CustomerDTO from '../dto/CustomerDTO';

export const CustomerServiceImplement = {
    getAllCustomers() {
        return CustomerRepository.getAllCustomers();
    },
    getCustomerById(customerId) {
        return CustomerRepository.getCustomerById(customerId);
    },
    saveCustomer(customer) {
        const customerDTO = new CustomerDTO(customer);
        const customerData = customerDTO.getCustomer();
        return CustomerRepository.saveCustomer(customerData);
    },
    updateCustomer(customerId, customer) {
        const customerDTO = new CustomerDTO(customer);
        const customerData = customerDTO.getCustomer();
        return CustomerRepository.updateCustomer(customerId, customerData);
    },
    deleteCustomer(customerId) {
        return CustomerRepository.deleteCustomer(customerId);
    }
};