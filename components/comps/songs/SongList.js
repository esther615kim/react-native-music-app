import React from 'react'
import styles from '../styles';
import { View, Text, ScrollView } from 'react-native'
import Song from './Song'
import dummySongList2 from '../../../assets/data/dummySongList2';


export default function SongList() {
    const { songs } = dummySongList2;
    console.log(songs)
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {songs.map((songs, i) => {
                    return (<Song key={i} song={songs} />)
                })}</ScrollView>
        </View>
    )
}
