import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { styles, loadCustomFonts } from './src/Styles/Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Views/Home';
import List from './src/Views/List';
import CharacterDetails from './src/Views/CharacterDetails';
// import { StatusBar } from 'expo-status-bar';
// import knyLogo from './src/Images/5ede4a3fb760540004f2c5e9.png'

export default function App() {

  const Stack = createNativeStackNavigator();

  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const loadFont = async () => {
      await loadCustomFonts();
      setFontLoaded(true);
    };

    loadFont();
  }, [])

  if (!fontLoaded) {
    return null; // Otra vista de carga o indicador de carga
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="List" component={List} options={{
          title: 'Characters',
          headerStyle: {
            backgroundColor: '#ee1c25'
          }
        }}/>

        <Stack.Screen name="Character" component={CharacterDetails} options={{
          title: 'Character Details',
          headerStyle: {
            backgroundColor: '#ee1c25'
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
