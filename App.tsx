import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from './screens/RootStackParams';
import homeScreen from './screens/home';
import feesScreen from './screens/fees';
import monthScreen from './screens/month';
import weekScreen from './screens/week';
import FirstAidScreen from './screens/FirstAid';  
import sewScreen from './screens/sew';
import landScreen from './screens/land';
import lifeSScreen from './screens/lifeS';
import childScreen from './screens/child';
import cookScreen from './screens/cook';
import gardenScreen from './screens/garden';
import locationScreen from './screens/location';
import contactScreen from './screens/contact';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={homeScreen} />
      <Stack.Screen name="fees" component={feesScreen} />
      <Stack.Screen name="month" component={monthScreen} />
      <Stack.Screen name="week" component={weekScreen} />
      <Stack.Screen name="FirstAid" component={FirstAidScreen} />
      <Stack.Screen name="sew" component={sewScreen} />
      <Stack.Screen name="land" component={landScreen} />
      <Stack.Screen name="lifeS" component={lifeSScreen} />
      <Stack.Screen name="child" component={childScreen} />
      <Stack.Screen name="cook" component={cookScreen} />
      <Stack.Screen name="garden" component={gardenScreen} />
      <Stack.Screen name="location" component={locationScreen} />
      <Stack.Screen name="contact" component={contactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
