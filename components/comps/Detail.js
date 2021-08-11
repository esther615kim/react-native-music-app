import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import SongList from '../comps/songs/SongList'
import { useNavigation } from '@react-navigation/native';

//아래 비구조 할당으로 ({album}) 으로 데리고 왔는데 안됨 걍 프랍스로
export default function Detail(props) {
    //할일 1. 온프레스 뮤직 플레이 함수 적용하기 
    //뒤로가기 위치...구리다..
    const { artist, imageUri, id } = props;
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Home')
    }

    function playMusic() {
        console.log("뮤직플레이")
    }

    return (
        <View style={styles.detailView} >
            <Pressable style={{ position: 'absolute', top: 5 }} onPress={onPress}><Ionicons name="md-arrow-back-outline" size={24} color="black" /></Pressable>
            <Image style={styles.detailImage} source={{ uri: imageUri }}></Image>
            <Text style={styles.detailText}>{artist}</Text>
            <Pressable style={styles.detailButton} onPress={playMusic}>TRY IT</Pressable>
            <SongList />
        </View >
    )
}

Detail.defaultProps = {
    id: '3',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
    artist: 'Journey, Escape, Avicii'
}