import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
function BottomTab(props) {
    return (
        <View style={styles.bottmContainer}>
            <TouchableOpacity style={styles.tabButton} >Home</TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} >Search</TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} >My</TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} >Setting</TouchableOpacity>
        </View>
    );
}

export default BottomTab;