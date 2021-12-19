import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonsList, onPress, getMoreData }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={pokemonsList.filter((pokemon, index) => pokemonsList.indexOf(pokemon === index))} // Filtrar duplicados
                renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onPress(item)}>
                            <PokemonCard pokemon={item} />
                        </TouchableOpacity>
                    )}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={() => getMoreData(pokemonsList.length)}
                onEndReachedThreshold={0.5}
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