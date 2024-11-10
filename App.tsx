import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from './screens/RootStackParams';
import HomeScreen from './screens/Home';
import FeesScreen from './screens/Fees';
import MonthScreen from './screens/Month';
import WeekScreen from './screens/Week';
import FirstAidScreen from './screens/FirstAid';  
import SewScreen from './screens/Sew';
import LandScreen from './screens/Land';
import LifeSScreen from './screens/LifeS';
import ChildScreen from './screens/Child';
import CookScreen from './screens/Cook';
import GardenScreen from './screens/garden';
import LocationScreen from './screens/Location';
import ContactScreen from './screens/Contact';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="fees" component={FeesScreen} />
      <Stack.Screen name="month" component={MonthScreen} />
      <Stack.Screen name="week" component={WeekScreen} />
      <Stack.Screen name="FirstAid" component={FirstAidScreen} />
      <Stack.Screen name="sew" component={SewScreen} />
      <Stack.Screen name="land" component={LandScreen} />
      <Stack.Screen name="lifeS" component={LifeSScreen} />
      <Stack.Screen name="child" component={ChildScreen} />
      <Stack.Screen name="cook" component={CookScreen} />
      <Stack.Screen name="garden" component={GardenScreen} />
      <Stack.Screen name="location" component={LocationScreen} />
      <Stack.Screen name="contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
