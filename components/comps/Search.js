import React from 'react';
import { TextInput, View } from 'react-native'
import styles from './styles';

export default function Search() {
    return (
        <View>
            <TextInput placeholder="search by artist/song" style={styles.searchBox} />

        </View>
    )
}
