import React, { useState, useEffect } from 'react';
import {StyleSheet, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { apiConnect } from '../../services/apiConnect';
import { backgroundTypeColors, textColor } from '../../utils/colors';
import { ARROW_BACK } from '../../assets/Images';
import PokemonHero from './components/PokemonHero';
import Dashboard from './components/Dashboard';

export default Info = ({ navigation, route }) => {
const { pokemon } = route.params;
const [about, setAbout] = useState([]);
const [types, setTypes] = useState([]);

useEffect(() => {
    (async() => {
        await getSpecies();
        await getTypes();
    })()
}, []);

const getSpecies = async () => {
    try {
        const response = await apiConnect(null, 'pokemon-species', `/${pokemon.id}/`);
        setAbout({
            description: response.flavor_text_entries.find(text => text.language.name === 'es').flavor_text,
            genera: response.genera.filter(item => item.language.name === 'es')[0].genus,
            evolutionChain: response.evolution_chain.url,
        });
    } catch(error) {  
        console.log("🚀 ~ file: Home.js ~ line 22 ~ getPokemons ~ error", error)
    }
}

const getTypes = async () => {
    try {
        const typesArray = [];
        for await (const types of pokemon.types) {
            const response = await apiConnect(types.type.url);
            typesArray.push(response.damage_relations);
        }
        setTypes([...types, ...typesArray]);
    } catch(error) {  
        console.log("🚀 ~ file: Info.js ~ line 44 ~ getTypes ~ error", error)
    }
}

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: backgroundTypeColors[pokemon.types[0].type.name]} ]} >
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <Image style={styles.arrow} source={ARROW_BACK} />
                <Text style={styles.headerTitle}>{pokemon.name}</Text>
            </TouchableOpacity>
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
                <PokemonHero pokemon={pokemon} />
                <Dashboard pokemon={pokemon} about={about} types={types}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 60 : 0,
    },
    header: {
        flex: 1,
        zIndex: 99,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: Platform.OS === 'ios' ? -40 : 20,
        height: 20,
        width: '100%',
    },
    arrow : {
        width: 25,
        height: 25,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: textColor.white,
        marginLeft: 20,
        textTransform: 'capitalize',
    },
});