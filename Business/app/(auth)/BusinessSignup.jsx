import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const BusinessSignup = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyPhoneNumber: "",
    address: "",
    CAC: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSignup = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://192.168.43.32:3000/api/auth/signup-org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Business signed up successfully!');
        navigation.navigate('Tab');
      } else {
        Alert.alert('Error', data.message || 'Something went wrong!');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to signup. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Signup</Text>
      <View style={styles.inputContainer}>
        <Icon name="business" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="location-on" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={formData.address}
          onChangeText={(text) => handleInputChange('address', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={formData.companyPhoneNumber}
          onChangeText={(text) => handleInputChange('companyPhoneNumber', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="description" size={20} color="#6753fc" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CAC"
          value={formData.CAC}
          onChangeText={(text) => handleInputChange('CAC', text)}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.btnText}>
          {loading ? 'Signing up...' : 'Signup'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BusinessLogin')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  btn: {
    backgroundColor: '#6753fc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#6753fc',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default BusinessSignup;