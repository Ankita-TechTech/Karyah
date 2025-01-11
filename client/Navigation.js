import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from "react-native-feather";
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import OTPScreen from './screens/OTPScreen';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: "Home" }} // Replace CustomHeader if undefined
      />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{ title: "Account" }} // Replace CustomHeader if undefined
      />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;
        let iconSize = focused ? size + 8 : size; // Increase size when focused

        switch (route.name) {
          case 'Home':
            iconName = <Icon.Home stroke={color} width={iconSize} height={iconSize} />;
            break;
          case 'Account':
            iconName = <Icon.User stroke={color} width={iconSize} height={iconSize} />;
            break;
          default:
            break;
        }

        return iconName;
      },
      tabBarActiveTintColor: 'brown', // Active tab color
      tabBarInactiveTintColor: 'black', // Inactive tab color
      headerShown: false, // Hide default headers
      tabBarStyle: {
        backgroundColor: "#FF8C00", // Uniform tab bar color
        borderTopWidth: 0, // Remove the line in the middle
        elevation: 0, // Remove shadow (if any)
      },
    })}
  >
    <BottomTab.Screen name="Home" component={HomeStack} />
    <BottomTab.Screen name="Account" component={AccountStack} />
  </BottomTab.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OTP" 
          component={OTPScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
