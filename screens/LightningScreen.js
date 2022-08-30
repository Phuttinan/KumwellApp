import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, ActivityIndicator, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Circle,Callout } from 'react-native-maps';
import FieldSet from 'react-native-fieldset';
import ApiMarkerLightning from '../LightningCall/MarkerLightning';
//import LightningMarker from '../LightningCall/MarkerLightning';

import Fetch from '../TextSlide/CallTextSlide';

const LocationMap = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState([]);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLoading(false);
  
       /* console.log('Latitude', location.coords.latitude)
        console.log('Longitude', location.coords.longitude)*/
  
        const region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          //latitudeDelta: location.coords.latitude,
          //longitudeDelta: location.coords.longitude
        }
  
      })();
    }, []);

   
  
    let text = '';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

    return (
        <View style={styles.containerMap}>
            {loading ? 
            <ActivityIndicator size="large" /> : (
                <View >
                    <MapView 
                        style={styles.map} 
                        initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.25,
                        longitudeDelta: 0.25
                        }}
                        showsUserLocation={true}
                        followsUserLocation={false}
                        showsMyLocationButton={true}
                        zoomControlEnabled={true}
                        >
                        <Circle 
                        center={{ 
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude }}
                        radius={10000} 
                        strokeWidth={2}
                        strokeColor={'rgba(0, 0, 0, 0.5)'} 
                        fillColor={'rgba(255, 0, 0, 0.1)'}
                        />
                        <Circle
                        center={{ 
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude }} 
                        radius={5000} 
                        strokeWidth={2}
                        strokeColor={'rgba(0, 0, 0, 0.5)'}
                        fillColor={'rgba(255, 0, 0, 0.1)'}
                        />
                        <View>
                          
                        </View>
                        {/*<ApiMarkerLightning/>*/}
                    </MapView>
                </View>
            )}
        </View>
      );
    }
    
//setInterval(function(){this.ApiFlatList} , 10000) ;
const LightningScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
        <View style={styles.fetch}>
          <View style={styles.text}>
            <Fetch />
          </View>
        </View> 
        <LocationMap/>
      </View>
        
    )
    /*return(
            <View style={styles.containerMap}>
                <MapView 
                style={styles.map} 
                showsCompass={true} 
                zoomControlEnabled={true}
                toolbarEnabled={false}
                initialRegion={{
                latitude: 13.8383084,
                longitude: 100.5496514,
                latitudeDelta: 0.35,
                longitudeDelta: 0.35,
                }}>
                <Marker coordinate={{latitude : 13.81342789,longitude : 100.5532165}}>
                    <Image style={styles.markerImage} source={require('../image/lightning_icon/4.png')} /> 
                </Marker>
                <Marker coordinate={{latitude : 13.8501051,longitude : 100.5197336}}>
                    <Image style={styles.markerImage} source={require('../image/lightning_icon/5.png')} /> 
                </Marker>
                <Marker coordinate={{latitude : 13.88753545,longitude : 100.5870353}}>
                    <Image style={styles.markerImage} source={require('../image/lightning_icon/6.png')} /> 
                </Marker>
                <Circle 
                center={loca}
                radius={10000} 
                strokeWidth={2}
                strokeColor={'rgba(0, 0, 0, 0.5)'} 
                fillColor={'rgba(255, 0, 0, 0.1)'}
                />
                <Circle
                center={loca} 
                radius={5000} 
                strokeWidth={2}
                strokeColor={'rgba(0, 0, 0, 0.5)'}
                fillColor={'rgba(255, 0, 0, 0.1)'}
                />
                </MapView>
            </View>
    )*/
  }

  const loca = {
    latitude : 13.8383084,
    longitude : 100.5496514
  };

  const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignSelf: 'stretch',
       
    },
    fetch: {
      
    },
    text: {
      backgroundColor: '#fff',
    },
    containerMap: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    lightning:{
        height: 100,
        backgroundColor: '#ED1B24',
        borderRadius: 20,
        justifyContent: 'center',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 3,
        marginBottom: 15,
        paddingLeft: 20,
        flexWrap: 'wrap',
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '300',
          
    },
    map: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        //alignSelf: 'stretch',
    },
    markerImage: {
        width: 35,
        height: 35
    },
    textbox: {
      height: 50,
      width: 50,
      backgroundColor: '#fff',
    },
    titlebox: {
      fontSize: 20,

    },
   
})

export default LightningScreen;
