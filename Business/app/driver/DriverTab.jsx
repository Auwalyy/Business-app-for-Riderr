import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Home Screen</Text>
  </View>
);

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
