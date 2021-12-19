import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { apiConnect } from '../../services/apiConnect';
import { textColor, backgroundTypeColors } from '../../utils/colors';
import PokemonHero from './components/PokemonHero';
import Dashboard from './components/Dashboard';

export default Info = ({ route }) => {
const { pokemon } = route.params;
const [about, setAbout] = useState([]);

useEffect(() => {
    (async() => {
        await getAbilities();
    })()
}, []);

const getAbilities = async () => {
    try {
        const response = await apiConnect(null, 'pokemon-species', `/${pokemon.id}/`);
        setAbout({
            description: response.flavor_text_entries.find(text => text.language.name === 'es').flavor_text,
            genera: response.genera.filter(item => item.language.name === 'es')[0].genus,
        });
    } catch(error) {  
        console.log("🚀 ~ file: Home.js ~ line 22 ~ getPokemons ~ error", error)
    }
}

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: backgroundTypeColors[pokemon.types[0].type.name]} ]} >
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <PokemonHero pokemon={pokemon} />
                <Dashboard pokemon={pokemon} about={about}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});