import { View, Text, FlatList, StyleSheet, Pressable, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import {firebase} from './config'
import MarqueeText from 'react-native-marquee';

const Fetch = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([]);
    const todoRef = firebase.firestore().collection('todos');

    useEffect(() => {
        todoRef
       .onSnapshot(
        querySnapshot => {
            const users = []
            querySnapshot.forEach((doc) => {
                const {heading, text} = doc.data()
                users.push({
                    id: doc.id,
                    heading,
                    text,
                })
            })
            setUsers(users),
            setLoading(false)
        }
       )
    }, []);

    return (
        <View style={styles.slide}>
        {loading ? <ActivityIndicator size="large" /> : (
            <FlatList 
                data={users}
                numColumn={1}
                renderItem={({item}) => (
                    <View style={styles.textslide}>
                        <MarqueeText
                            style={styles.text1}
                            speed={0.1}
                            marqueeOnStart={true}
                            loop={true}
                            delay={1000}
                            >
                            {item.text}
                        </MarqueeText>
                    </View>
                )}>
            </FlatList>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
        marginBottom: 10,
        marginTop: 5,
        alignSelf: 'stretch',
        
    },
    textslide: {
        padding:5,
    },
    text1: {
        color: 'red',
        fontSize: 25,
        
    }
  });

export default Fetch;