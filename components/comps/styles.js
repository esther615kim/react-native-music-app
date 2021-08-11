import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { BorderlessButton, Directions } from 'react-native-gesture-handler';

const styles = StyleSheet.create(
    {
        albumContainer: {
            margin: '0.5em',
            width: '10em',
            height: '12em',
            borderRadius: '5px'
        },
        albumImage: {
            width: '100%',
            height: '9em',
        },
        albumText: {
            fontStyle: 'bold',
            color: '#212121',
            marginTop: '10px',
        },
        albumListContainer: {
            padding: '0.6em',
            height: '17em',
            backgroundColor: '#fff',
            flexDirection: 'column',
            flex: 1,
            border: '1px solid #ccc'
        },

        albumListTitle: {
            padding: 5,
            color: '#212121',
            fontSize: '20px',
            fontStyle: 'bold'
        },
        searchBox: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            paddingLeft: "0.6em",
        },
        detailView: {
            margin: 0,
            paddingTop: 50,
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            backgroundColor: '#fff',
            textAlign: 'center'
        },
        detailImage: {
            width: 280,
            height: 280
        },
        detailText: {
            paddingTop: 5,
            color: '#212121',
            fontSize: 16,
            fontWeight: 600,
        },
        detailButton: {
            backgroundColor: '#212121',
            color: '#fff',
            fontSize: 14,
            margin: 20,
            paddingLeft: 25,
            paddingRight: 25,
            borderRadius: 5,
            //paddingVertical : 25
        },
        songView: {
            width: '100vw',
            padding: 10,
            backgroundColor: '#ddd',
            position: 'relative',
        },
        songImage: {
            width: 45,
            height: 45,
            position: 'absolute',
            left: 5,
            //alignSelf: 'flex-start'
        },
        playWidget: {
            position: 'absolute',
            bottom: 48,
            flexDirection: 'row',
            height: 60,
            width: '100%',
            padding: 5,
            backgroundColor: '#212121',
            alignItems: 'center',
            color: '#fff'
        },
        rightWidgetView: {
            paddingLeft: 10,
        },
        widgetImage: {
            width: 45,
            height: 45,
            marginRight: 10,

        }, widgetText: {
            paddingRight: '20%',
            fontSize: 14,
            color: '#fff'
        }
    })

export default styles;