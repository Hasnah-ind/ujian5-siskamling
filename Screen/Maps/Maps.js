import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    PermissionsAndroid,
    Platform,
    ToastAndroid
  } from 'react-native';



const styles = StyleSheet.create({
 container: {
   position : 'absolute',
   top : 0,
   left : 0,
   right : 0,
   bottom : 0,
   justifyContent: 'flex-end',
    alignItems: 'center',
 },
 map: {
  position : 'absolute',
   top : 0,
   left : 0,
   right : 0,
   bottom : 0
 },
});

class Maps extends Component {
    render() {
        return (
    <View style={styles.container}>
     <MapView 
     style={styles.map}
     region={{
         latitude: 107.7178081,
         longitude: -6.9291429,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,}}>
     </MapView>
   </View>
        );
    }
}

export default Maps;