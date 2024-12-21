import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import BusinessDashboard from "../screens/BusinessDashboard";
import RiderManagement from "../screens/RiderManagement";
import Profile from "../screens/BusinessProfile";
import AddRider from "../screens/AddRider";

const TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={BusinessDashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Riders"
        component={RiderManagement}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bicycle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

     <Tab.Screen 
     name="Add Rider"
     component={AddRider}
     options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="add" size={size} color={color} />
      ),
      headerShown: false,
     }}
     />
{/* 
     <Tab.Screen
       name="History"
       component={History}
       options={{
         tabBarIcon: ({ color, size }) => (
           <Icon name="wallet" size={size} color={color} />
         ),
       }}
     /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
