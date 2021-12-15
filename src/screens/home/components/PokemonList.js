import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonsList, onPress }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={pokemonsList.filter((pokemon, index) => pokemonsList.indexOf(pokemon === index))} // filter out duplicates
                renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onPress(item)}>
                            <PokemonCard pokemon={item} />
                        </TouchableOpacity>
                    )}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        marginHorizontal: 30,
    },
});