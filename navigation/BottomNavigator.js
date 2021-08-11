import {  //아이콘파일
    Ionicons,
    Entypo,
    EvilIcons,
    MaterialCommunityIcons,
    FontAwesome5
} from '@expo/vector-icons';

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../../components/navigation/BottomTabNavigator';
import BottomTab from '../components/comps/BottomTab';

export default function BottomNavigator() {
    return (
        <BottomTabNavigator>
            <BottomTab.Screen name="Home"><Entypo name="home" /></BottomTab.Screen>
            <BottomTab.Screen name="Search"><EvilIcons name="search" /></BottomTab.Screen>
            <BottomTab.Screen name="Detail"><EvilIcons name="Detail" /></BottomTab.Screen>
            <BottomTab.Screen name="My library"><MaterialCommunityIcons name="My library" /></BottomTab.Screen>
        </BottomTabNavigator>
    )
}

