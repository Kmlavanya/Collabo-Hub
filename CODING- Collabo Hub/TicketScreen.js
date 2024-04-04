import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const TicketScreen = () => {
  // Mock data for tickets
  const [tickets, setTickets] = useState([
    { id: '1', title: 'Ticket 1', problem: 'Issue with server connection' },
    { id: '2', title: 'Ticket 2', problem: 'Software bug causing crashes' },
    { id: '3', title: 'Ticket 3', problem: 'Network latency problem' },
    // Add more tickets as needed
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ticket Management</Text>
      <Text>Total Tickets Raised: {tickets.length}</Text>
      <FlatList
        data={tickets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.ticketItem}
            onPress={() => {
              // Navigate to ticket details screen passing item.id
              console.log(`Viewing details of ticket ${item.id}`);
            }}
          >
            <Text style={styles.ticketTitle}>{item.title}</Text>
            <Text>{item.problem}</Text>
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
  ticketItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
export default TicketScreen;