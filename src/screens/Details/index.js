import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {
    const route = useRoute();

    return <View style={styles.content}>
        <Text style={styles.text}>ID: { route.params?.id }</Text>
        <Text style={styles.text}>Title: { route.params?.title }</Text>
    </View>
}

const styles = StyleSheet.create({
    content: {
        margin: 17
    },
    text: {
        padding: 5
    }
})
