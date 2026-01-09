import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Monday from './screens/Monday';
import Tuesday from './screens/Tuesday';
import Wednesday from './screens/Wednesday';
import Thursday from './screens/Thursday';
import Friday from './screens/Friday';
import Saturday from './screens/Saturday';
import Sunday from './screens/Sunday';
import SetMedication from './screens/SetMedication';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Monday" component={Monday} />
        <Stack.Screen name="Tuesday" component={Tuesday} />
        <Stack.Screen name="Wednesday" component={Wednesday} />
        <Stack.Screen name="Thursday" component={Thursday} />
        <Stack.Screen name="Friday" component={Friday} />
        <Stack.Screen name="Saturday" component={Saturday} />
        <Stack.Screen name="Sunday" component={Sunday} />
        <Stack.Screen name="SetMedication" component={SetMedication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
