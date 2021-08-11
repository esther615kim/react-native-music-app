import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import PlayWidget from './PlayWidget';
import AlbumList from './albums/AlbumList';

export default function Home2() {


    return (

        <view>
            <AlbumList />
            <h3>Cmpnt- Songs / Recommended...Text, Song * 4 가로넘기기 </h3>
        </view>


    )
}
