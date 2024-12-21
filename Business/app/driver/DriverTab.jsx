import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => (
 <View style={styles.homeContainer}>
   <Text style={styles.heading}>Welcome to Your Dashboard</Text>
   <View style={styles.cardRow}>
     <TouchableOpacity style={styles.card}>
       <Text style={styles.cardText}>Card 1</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.card}>
       <Text style={styles.cardText}>Card 2</Text>
     </TouchableOpacity>
   </View>
   <View style={styles.cardRow}>
     <TouchableOpacity style={styles.card}>
       <Text style={styles.cardText}>Card 3</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.card}>
       <Text style={styles.cardText}>Card 4</Text>
     </TouchableOpacity>
   </View>
 </View>
);

const styles = StyleSheet.create({
 homeContainer: {
   flex: 1,
   backgroundColor: '#fff',
   padding: 20,
 },
 heading: {
   fontSize: 24,
   fontWeight: 'bold',
   color: '#2F80ED',
   marginBottom: 20,
   textAlign: 'center',
 },
 cardRow: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: 20,
 },
 card: {
   flex: 1,
   backgroundColor: '#2F80ED',
   padding: 20,
   marginHorizontal: 10,
   borderRadius: 10,
   justifyContent: 'center',
   alignItems: 'center',
 },
 cardText: {
   fontSize: 16,
   color: '#fff',
   fontWeight: '600',
 },
});


const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Settings Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const DriverTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let icon;
            if (route.name === 'Home') {
              icon = require('./assets/home.png');
            } else if (route.name === 'Profile') {
              icon = require('./assets/profile.png');
            } else if (route.name === 'Settings') {
              icon = require('./assets/settings.png');
            }
            return <Image source={icon} style={styles.navIcon} />;
          },
          tabBarActiveTintColor: '#2F80ED',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F80ED',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default DriverTab;
