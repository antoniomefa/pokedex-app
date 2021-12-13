import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Home = ({ navigation }) => {
    const [searchText, seTsearchText] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Pokédex
                    </Text>
                    <Text style={styles.description}>Búsca tu pokemon por nombre o usando el número de Pokedéx Nacional</Text>
                </View>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="¿Qué Pokemón estás buscando?"
                        onChangeText={(text) => this.setState({text})}
                        value={searchText}
                    />
                </View>
                <TouchableOpacity style={{backgroundColor: 'lightblue', width: 80}} onPress={() => navigation.navigate('Info')}>
                    <Text style={{ color: 'black'}}>Ir a Info</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        fontSize: 20,
        color: '#000',
    },
    search: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    },
});