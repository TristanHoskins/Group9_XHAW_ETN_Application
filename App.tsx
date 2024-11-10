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
import GardenScreen from './screens/Garden';
import LocationScreen from './screens/Location';
import ContactScreen from './screens/Contact';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Fees" component={FeesScreen} />
      <Stack.Screen name="Month" component={MonthScreen} />
      <Stack.Screen name="Week" component={WeekScreen} />
      <Stack.Screen name="FirstAid" component={FirstAidScreen} />
      <Stack.Screen name="Sew" component={SewScreen} />
      <Stack.Screen name="Land" component={LandScreen} />
      <Stack.Screen name="LifeS" component={LifeSScreen} />
      <Stack.Screen name="Child" component={ChildScreen} />
      <Stack.Screen name="Cook" component={CookScreen} />
      <Stack.Screen name="Garden" component={GardenScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
