import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
    
import drawer from  './src/drawer';
import LeaveBalance from  './src/LeaveBalance';
import Profile1 from './src/Profile1';
import Apply from './src/Apply';
import Attendance from './src/Attendance';
import ApplyLeave from './src/ApplyLeave';
import Login from './src/Login';

const Stack = createNativeStackNavigator();
    
    export default function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator  screenOptions={{
            headerShown: false,
          }}>
            
            
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Apply" component={Apply} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="ApplyLeave" component={ApplyLeave} />
            <Stack.Screen name="drawer" component={drawer} />
            <Stack.Screen name="Profile1" component={Profile1} />
            <Stack.Screen name="LeaveBalance" component={LeaveBalance} />            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    
    