import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonsList, onPress }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={
                    pokemonsList.filter((pokemon, index) => {
                        pokemonsList.indexOf(pokemon === index) // filter out duplicates
                    })
                } 
                renderItem={({ pokemon }) => (
                    <TouchableOpacity onPress={() => onPress(pokemon)}>
                        <PokemonCard pokemon={pokemon} />
                    </TouchableOpacity>
                )}
                keyExtractor={pokemon => String(pokemon.id)}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },  
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: '#000'
    },
});