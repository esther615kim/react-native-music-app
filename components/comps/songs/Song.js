import React from 'react'
import styles from '../styles';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'; //이거 임포트 맞나
// view 랑 touchableopacity 병향가능? 뭘 안에 넣음?
export default function Song({ imageUri, artist, songTitle }) {
    return (
        <View style={styles.songView}>
            <TouchableOpacity>
                <Image style={styles.songImage} source={{ uri: imageUri }}></Image>
                <Text>{songTitle}</Text>
                <Text>{artist}</Text>

            </TouchableOpacity>
        </View >
    )
}

Song.defaultProps = {
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artist: 'Taylor Swift, Kygo Objective C, Avicii',
    songTitle: 'Day by Day'
}