import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import _layout from "./_layout";  
import BusinessSignup from "./(auth)/BusinessSignup"
import BusinessDashboard from "./screens/BusinessDashboard";
import TabNav from "./components/Tab";
import BusinessLogin from './(auth)/BusinessLogin'

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator options={{headerShown: false}}>
        <Stack.Screen component={BusinessSignup}
        name="Signup" options={{headerShown: false}} />
        <Stack.Screen options={{headerShown: false }}
         name="Login" component={BusinessLogin} />
        <Stack.Screen options={{headerShown: false }}
         name="BusinessDashboard" component={BusinessDashboard} />
        <Stack.Screen options={{headerShown: false }}
         name="Tab" component={TabNav} />
      </Stack.Navigator>
    
  );
}
