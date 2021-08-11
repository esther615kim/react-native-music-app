import React from 'react';
import Album from './Album';
import styles from '../styles';
import dummySongList from '../../../assets/data/dummySongList'
import { ScrollView, View, Text } from 'react-native';

export default function AlbumList() {
    const { albums, title } = dummySongList;
    return (
        <div>
            <View style={styles.albumListContainer}>
                <Text style={styles.albumListTitle} >{title}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {albums.map((album, i) => {
                        return (<Album key={i} album={album} />)
                    })}</ScrollView>
            </View>
        </div >
    )
}

//                        <Image src={{ uri: song.imageUri }} style={styles.albumImage}></Image>