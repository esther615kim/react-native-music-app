import {
    FontAwesome5
} from '@expo/vector-icons';

import React from 'react';
import Home from '../components/comps/Home';
import Detail from '../components/comps/Detail';
import Search from '../components/comps/Search';
import MyLibrary from '../components/comps/MyLibrary';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            //showLabel: false,
            style: {
                position: 'absolute',
                bottom: 30,
                padding: 5, //안 먹히는 것 같음..
            }
        }} screenOptions={{
            headerStyle: {
                backgroundColor: '#7176d3',
                height: 50,
                shadowColor: '#fff',
                borderBottomColor: '#ccc'
            }, headerTitleAlign: 'center'

        }}
        >
            <Tab.Screen name="Home" component={Home} o />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Detail" component={Detail} />
            <Tab.Screen name="MyLibrary" component={MyLibrary} />
        </Tab.Navigator>
    )
}

// 버튼 스타일링 options={{
// tabBarIcon: ({ focused }) => {
//     <View style={{ color: '#fff' }}>
//        <FontAwesome5 name="home" size={20}></FontAwesome5>
//     </View>
// }
// }}