import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';

// Initialize Firebase (replace with your own Firebase config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Function to handle user registration
const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registration successful
      console.log("User registered successfully:", userCredential.user);
    })
    .catch((error) => {
      // Handle errors during registration
      console.error("Error registering user:", error.message);
    });
}

// Function to handle user login
const loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User login successful
      console.log("User logged in successfully:", userCredential.user);
    })
    .catch((error) => {
      // Handle errors during login
      console.error("Error logging in user:", error.message);
    });
}

// React component for user registration and login
const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Email:</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <Text>Enter Password:</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button
        title="Register"
        onPress={() => registerUser(email, password)}
      />
      <Button
        title="Login"
        onPress={() => loginUser(email, password)}
      />
    </View>
  );
}

export default AuthScreen;