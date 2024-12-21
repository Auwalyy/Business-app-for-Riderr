import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const Profile = () => {
  const [email, setEmail] = useState("business@example.com");
  const [phone, setPhone] = useState("+1234567890");
  const [password, setPassword] = useState("");

  const handleUpdateProfile = () => {
    if (!email || !phone || !password) {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }
    Alert.alert("Success", "Profile updated successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        keyboardType="phone-pad"
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
});

export default Profile;
