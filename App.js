import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Component/Home';
import SurahScreen from './Component/Surah';
import DuaScreen from './Component/Dua';
import Navbar from './Component/Navbar';
import PrayerTime from './Component/PrayerTime'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Surah" component={SurahScreen} />
        <Stack.Screen name="Dua" component={DuaScreen} />
        <Stack.Screen name="PrayerTime" component={PrayerTime} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
