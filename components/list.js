import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Image, TouchableOpacity } from 'react-native-web';

export default function MovieList(props) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/movies/', {
            method: 'GET',
            headers: {
                'Authorization': 'Token eb18eb828066cc8c40fd729c760fdf7c80c1f096'
            }
        })
            .then(res => res.json())
            .then(res => setMovies(res))
            .catch(err => console.log(err))


    }, [])

    const movieClicked = (movie) => {
        props.navigation.navigate("Detail",{movie:movie})
    }
    return (
        <View>
            <Image
                source={require('../assets/icon.png')}
                style={{ width: '100%', height: '50%', paddingTOp: 30 }}
                resizeMode="contain"
            />
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    onPress={() => movieClicked(item)}
                    >
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        padding: 10,
        height: 50,
        backgroundColor: '#282C35'

    },
    itemText: {
        color: '#fff',
        fontSize: 24

    }
});
