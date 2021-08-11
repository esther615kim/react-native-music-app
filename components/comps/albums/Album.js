import React from 'react'
import styles from '../styles';
import { useNavigation } from '@react-navigation/native'; //이거 임포트 맞나
import { View, Text, Image, TouchableOpacity } from 'react-native'

//질문--> touchable opacity 쓰면 view 로 wrapping 안해도 괜찮은지?
export default function Album({ album }) {

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Detail', album)
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.albumContainer}>
                <Image style={styles.albumImage} source={{ uri: album.imageUri }}></Image>
                <Text style={styles.albumText}>{album.artist}</Text>
            </View >
        </TouchableOpacity>
    )
}

// <Image style={styles.albumImage} src={ }</Image>