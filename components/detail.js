import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View,Button } from 'react-native';
import { Image } from 'react-native-web';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Edit from './edit';
export default function Detail(props) {

    const movie = props.navigation.getParam('movie', null)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.starContainer}>
                <FontAwesomeIcon style={movie.avg_rating > 0 ? styles.orange : styles.white} icon={faStar} />
                <FontAwesomeIcon style={movie.avg_rating > 1 ? styles.orange : styles.white} icon={faStar} />
                <FontAwesomeIcon style={movie.avg_rating > 2 ? styles.orange : styles.white} icon={faStar} />
                <FontAwesomeIcon style={movie.avg_rating > 3 ? styles.orange : styles.white} icon={faStar} />
                <FontAwesomeIcon style={movie.avg_rating > 4 ? styles.orange : styles.white} icon={faStar} />
            </View>
            <Text style={styles.description}>{movie.description}</Text>

        </View>
    );
}
Detail.navigationOptions = screenProps => ({
    title: 'Movie',
    headerStyle: {
        backgroundColor: 'orange'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    headerRight: (
        <Button
        title="Edit"
        onPress={() => screenProps.navigation.navigate("Edit",{movie:screenProps.navigation.getParam('movie',null)})}
        
        />
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282C35',
        padding: 10,
        color: 'white'
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

    },
    starContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    orange: {
        color: 'orange'
    },
    white: {
        color: 'white'
    },
    description: {
        color: 'white',
        fontSize: 20,
        padding: 10

    },
    title: {
        color: 'white',
        fontSize: 20,
        padding: 10
    }

});
