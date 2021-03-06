import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, TextInput, ImageBackground, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { POKEBALL_HEADER } from '../../assets/Images';
import { background, textColor } from '../../utils/colors';
import { apiConnect } from '../../services/ApiConnect';
import PokemonList from './components/PokemonList';
import { setPokemonsList, setPagCounter } from '../../services/redux/homeSlice';

export default Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const pokemonsList = useSelector(state => state.homeReducer.pokemonsList);
    const pagCounter = useSelector(state => state.homeReducer.pagCounter);
    const [searchText, setSerachText] = useState('');
    const [getMorePokemons, setGetMorePokemons] = useState(null);

    useEffect(() => {
        (async() => {
            if (pagCounter <= 890)
            await getPokemons();
        })()
    }, [getMorePokemons]);

    const getPokemons = async () => {
        try {
            const response = await apiConnect(null, 'pokemon', `?limit=${20}&offset=${pagCounter}`);
            const pokemonsArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await apiConnect(pokemon.url);
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    types: pokemonDetails.types,
                    image: pokemonDetails.sprites.other["official-artwork"].front_default,
                    height: pokemonDetails.height,
                    weight: pokemonDetails.weight,
                    abilities: pokemonDetails.abilities.map(ability => ability.ability.name),
                    stats: pokemonDetails.stats,
                });
            }
            dispatch(setPokemonsList(pokemonsArray));
            dispatch(setPagCounter());
        } catch(error) {  
            console.log("???? ~ file: Home.js ~ line 22 ~ getPokemons ~ error", error)
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
                
                <Text style={styles.title}>Pok??dex</Text>
                <Text style={styles.description}>B??sca tu pokemon por nombre o usando el n??mero de Poked??x Nacional</Text>
                
                    <TextInput
                        style={styles.searchBox}
                        placeholder="??Qu?? Pokem??n est??s buscando?"
                        onChangeText={(text) => setSerachText({text})}
                        value={searchText}
                    />
            </ImageBackground>

            <PokemonList pokemonsList={pokemonsList} onPress={onSelectPokemon} getMoreData={setGetMorePokemons}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background.white,
        marginTop: Platform.OS === 'ios' ? 60 : 0,
    },
    header: {
        marginTop: Platform.OS === 'ios' ? -45 : 0,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
        fontWeight: '700',
        marginHorizontal: 30,
        color: textColor.black,
    },
    description: {
        fontSize: 16,
        marginBottom: 25,
        fontWeight: '400',
        marginHorizontal: 30,
        color: textColor.grey,
    },
    searchBox: {
        height: 60,
        fontSize: 16,
        borderRadius: 10,
        marginBottom: 20,
        fontWeight: '400',
        textAlign: 'center',
        marginHorizontal: 30,
        backgroundColor: background.default,
    },
});