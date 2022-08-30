import React, { useState, useEffect } from 'react';
import { Marker } from 'react-native-maps';
import { Image, StyleSheet} from 'react-native';

/*
function LightningMarker(props) {
    const { dataLightnings } = props;
    return (
    <Marker coordinate={{latitude : parseFloat(dataLightnings.LAT), longitude : parseFloat(dataLightnings.LON)}}>
        <Image style={styles.markerImage} source={require('../../image/lightning/4.png')} /> 
    </Marker>
    );
}

const styles = StyleSheet.create({
    markerImage: {
      width: 35,
      height: 35
    }
  });

export default LightningMarker;
*/

const ApiMarkerLightning = () => {
  //setInterval(ApiFlatList(), 10000);
  let [data, setData] = useState([])
  let host = (Platform.OS == 'android') ? '58.97.57.113' : 'localhost'
  //http://58.97.57.113/LLSApp/jgetlast1hr.php
  useEffect(() => {
      fetch(`http://${host}/LLSApp/jgetlast1hr.php`)
          .then(response => response.json())
          .then(result => setData(result))
          .catch(err => Alert.alert(err));
  }, [])
/*
  React.useEffect(() => {
      let secTimer = setInterval(() => {
          ApiFlatList()
      }, 10000)
      return () => clearInterval(secTimer);
    }, []);
*/
/*
  const renderFlatListItem = (data) => {
      return (
          <View key={data._id} style={styles.flatListItems}>
              <Text style={styles.itemName}>{data.item.AMP}</Text>
              <Text style={styles.itemPrice}>{data.item.LON}฿</Text>
          </View>
      )
  }
  */

  const lightningElement = () => {
    return (
    <Marker key={data._id} coordinate={{latitude : parseFloat(data.item.LAT), longitude : parseFloat(data.item.LON)}}>
        <Image style={styles.markerImage} source={require('../image/lightning_icon/4.png')} /> 
    </Marker>
  )};
  console.log(data)
  return

  /*
  return (
      <View style={styles.container}>
          <Text style={{ alignSelf: 'center', fontSize: 20 }}>รายการสินค้า</Text>
          <FlatList data={data} renderItem={renderFlatListItem}
              keyExtractor={(item, index) => item + index}
              style={styles.flatList}
              contentContainerStyle={styles.flatListContent}
          />
      </View>
  )
  */
}

const styles = StyleSheet.create({
  markerImage: {
    width: 35,
    height: 35
  }
});

export default ApiMarkerLightning;