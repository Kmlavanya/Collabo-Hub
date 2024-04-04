import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AssetScreen = ({ navigation }) => {
  const handleAddAsset = () => {
    // Navigate to the AddAssetScreen when the '+' button is pressed
    navigation.navigate('AddAsset');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Asset Management</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddAsset}>
        <Text style={styles.addButtonText}>+</Text>
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
});

export default AssetScreen;