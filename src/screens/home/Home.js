import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { POKEBALL_HEADER } from '../../assets/Images';
import { SEARCH_ICON } from '../../assets/Icons';
import { background, textColor } from '../../utils/colors';
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
        <SafeAreaView style={styles.container} >
            <ImageBackground 
                style={styles.header}
                resizeMode="contain"
                source={POKEBALL_HEADER}>
                
                <Text style={styles.title}>Pokédex</Text>
                <Text style={styles.description}>Búsca tu pokemon por nombre o usando el número de Pokedéx Nacional</Text>
                
                    <TextInput
                        style={styles.searchBox}
                        inlineImageLeft={SEARCH_ICON}
                        placeholder="¿Qué Pokemón estás buscando?"
                        onChangeText={(text) => this.setState({text})}
                        value={searchText}
                    />
            </ImageBackground>


            <PokemonList pokemonsList={pokemonsList} onPress={onSelectPokemon} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background.white,
    },
    header: {
        marginTop: -45,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
        fontWeight: '700',
        marginHorizontal: 40,
        color: textColor.black,
    },
    description: {
        fontSize: 16,
        marginBottom: 25,
        fontWeight: '400',
        marginHorizontal: 40,
        color: textColor.grey,
    },
    searchBox: {
        height: 60,
        fontSize: 16,
        borderRadius: 10,
        marginBottom: 20,
        fontWeight: '400',
        textAlign: 'center',
        marginHorizontal: 40,
        backgroundColor: background.default,
    },
});