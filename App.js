import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { styles, loadCustomFonts } from './src/Styles/Styles';
import Home from './src/Views/Home';
// import { StatusBar } from 'expo-status-bar';
// import knyLogo from './src/Images/5ede4a3fb760540004f2c5e9.png'

export default function App() {

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
    <View style={styles.container}>
      <Home/>
    </View>
  );
}
