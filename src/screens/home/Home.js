import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { apiConnect } from '../../services/apiConnect';

import PokemonList from './components/PokemonList';

export default Home = ({ navigation }) => {
    const [searchText, seTsearchText] = useState('');
    const [pokemonsList, setPokemonsList] = useState([]);
    // console.log("PkemonsList------>", pokemonsList);

    useEffect(() => {
        (async() => {
            await getPokemons();
        })()
    }, []);

    const getPokemons = async () => {
        try {
            const response = await apiConnect(null, 'pokemon');
            const pokemonsArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await apiConnect(pokemon.url);
                pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image: pokemonDetails.sprites.other["official-artwork"].front_default,
                });
            }
            setPokemonsList([...pokemonsList, ...pokemonsArray]);
        } catch(error) {  
            console.log("🚀 ~ file: Home.js ~ line 22 ~ getPokemons ~ error", error)
        }
    }

    const onSelectPokemon = (pokemon) => {
        navigation.navigate('Info', { pokemon });
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
            
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
                <PokemonList pokemonsList={pokemonsList} onPress={onSelectPokemon} />
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