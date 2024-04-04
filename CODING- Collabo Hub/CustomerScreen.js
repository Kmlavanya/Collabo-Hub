import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const CustomerScreen = () => {
  const [customers, setCustomers] = useState([]);

  // Function to fetch customers from the backend
  const fetchCustomers = async () => {
    try {
      // Simulating API call to fetch customers
      const response = await fetch('https://api.example.com/customers');
      const data = await response.json();
      setCustomers(data.customers); // Assuming the response contains a 'customers' array
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  // Fetch customers on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Function to add a new customer
  const addCustomer = () => {
    // Implement logic to add a new customer
    console.log('Adding a new customer');
  };

  // Function to edit a customer
  const editCustomer = (customerId) => {
    // Implement logic to edit the selected customer
    console.log(`Editing customer with id ${customerId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Management</Text>
      <TouchableOpacity style={styles.addButton} onPress={addCustomer}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <FlatList
        data={customers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.customerItem}
            onPress={() => editCustomer(item.id)}
          >
            <Text style={styles.customerName}>{item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  customerItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CustomerScreen;