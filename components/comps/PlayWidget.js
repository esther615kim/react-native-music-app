import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles';

export default function PlayWidget(props) {
    const { artist, imageUri, songTitle } = props;
    const onPress = () => {
        console.log("위젯 플레이하기")
    }
    return (
        < View style={styles.playWidget}>
            <Image style={styles.widgetImage} source={{ uri: imageUri }}></Image>
            <View style={styles.rightWidgetView}></View>
            <Text style={styles.widgetText}>{songTitle}  {artist}</Text>
            <Pressable onPress={onPress}><MaterialCommunityIcons name="play-circle-outline" size={25} color="lavender" /></Pressable>
            <Pressable><FontAwesome5 name="heart" size={22} color="lavender" /></Pressable>
        </View >
    )
}

PlayWidget.defaultProps = {
    songTitle: 'Coding is hard',
    imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
    artist: 'Bob Marley, Cardi B, Stas Mihailov'
}