import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Feather from '@expo/vector-icons/Feather'
import { useFonts, Nunito_400Regular as NunitoRegular, Nunito_700Bold as NunitoBold } from '@expo-google-fonts/nunito';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Albums from './src/components/Albums';
import SharedAlbum from './src/components/SharedAlbum'

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FAFAFA'
  },
};

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default function App() {
  const [assetsReady, setAssetsReady] = useState(false);

  async function _loadFonts() {
    const iconFontAssets = cacheFonts([Feather.font])
    await Promise.all([...iconFontAssets]);
  }

  let [fontsLoaded] = useFonts({
    NunitoRegular, NunitoBold
  });

  if (!fontsLoaded || !assetsReady) {
    return <AppLoading
              startAsync={_loadFonts}
              onFinish={() => setAssetsReady(true)}
              onError={console.warn}
            />
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Albums' component={Albums} />
        <Stack.Screen name='SharedAlbum' component={SharedAlbum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}