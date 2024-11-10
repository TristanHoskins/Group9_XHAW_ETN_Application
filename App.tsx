import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from './screens/RootStackParams';
import HomeScreen from './screens/home';
import FeesScreen from './screens/fees';
import MonthScreen from './screens/month';
import WeekScreen from './screens/week';
import FirstAidScreen from './screens/FirstAid';  
import SewScreen from './screens/sew';
import LandScreen from './screens/land';
import LifeSScreen from './screens/lifeS';
import ChildScreen from './screens/child';
import CookScreen from './screens/cook';
import GardenScreen from './screens/garden';
import LocationScreen from './screens/location';
import ContactScreen from './screens/contact';

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
