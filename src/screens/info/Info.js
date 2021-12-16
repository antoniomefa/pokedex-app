import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { textColor, backgroundTypeColors } from '../../utils/colors';
import PokemonHero from './components/PokemonHero';

export default Info = ({ route }) => {
const { pokemon } = route.params;
console.log("🚀 ~ file: Info.js ~ line 7 ~ pokemon", pokemon)

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: backgroundTypeColors[pokemon.types[0].type.name]} ]} >
            <PokemonHero pokemon={pokemon} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});