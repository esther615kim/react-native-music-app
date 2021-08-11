import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/comps/Home';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import PlayWidget from './components/comps/PlayWidget';
import Tabs from './navigation/Tabs'

export default function App() {

    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={DarkTheme}>
            <Tabs />
            <PlayWidget />
        </NavigationContainer>
    );
}
