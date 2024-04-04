import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddAssetScreen = () => {
  const [formData, setFormData] = useState({
    workLocation: '',
    category: '',
    equipmentMake: '',
    assetID: '',
    equipmentModel: '',
    warrantyType: '',
    quantity: '',
    warrantyStartDate: '',
    warrantyEndDate: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Implement logic to submit form data (e.g., send it to the backend)
    console.log('Form submitted:', formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Asset</Text>
      {/* Add input fields for each asset detail */}
      <TextInput
        style={styles.input}
        placeholder="Work Location"
        value={formData.workLocation}
        onChangeText={(text) => handleChange('workLocation', text)}
      />
      {/* Add more TextInput components for other asset details */}
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Submit</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddAssetScreen;