import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    Text,
    StyleSheet, 
    View, 
    FlatList, 
    SafeAreaView, 
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: '1',
        title: 'First'
    },
    {
        id: '2',
        title: 'Second'
    },
    {
        id: '3',
        title: 'Third'
    },
];

const Item = ({title, onPress}) => (
    <TouchableOpacity
        onPress={onPress}
    >
        <View style={styles.card}>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
);

export default function Home() {
    const navigation = useNavigation();

    return <SafeAreaView style={styles.content}>
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} onPress={() => {
                    navigation.navigate('Details', item)
                }} />
            }
            keyExtractor={ item => item.id }
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    text: {
        margin: 17
    },
    card: {
        backgroundColor: '#fff',
        margin: 5,
        padding: 10
    }
});
