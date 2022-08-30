import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Dimensions,ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


const KumwellNewsScreen = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <WebView 
            source={{ uri: 'https://www.kumwell.com/Home.aspx' }} 
          />
        </SafeAreaView>
    )
  }

  
export default KumwellNewsScreen;

