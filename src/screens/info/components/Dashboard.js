import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { background, textColor } from '../../../utils/colors';
import { apiConnect } from '../../../services/ApiConnect';
import { POKEBALL } from '../../../assets/Images';

import About from './About';
import Stats from './Stats';
import Evolution from './Evolution';

const Dashboard = ({ pokemon, about, types }) => {
    const [tabOptions, setTabOptions] = useState([true, false, false]);
    const [evolution, setEvolution] = useState([]);

    useEffect(() => {
        (async() => {
            if(about && about.evolutionChain) {
                await getEvolution();
            }
        })()
    }, [about]);

    const getEvolution = async () => {
        try {
            const response = await apiConnect(about.evolutionChain);
            const evolutionArray = [];
            var evolutionChain = response.chain;

            do {
                var pokemon = await apiConnect(null, 'pokemon', `/${evolutionChain.species.name}/`);
                var evolutionDetails = evolutionChain.evolution_details[0];
                evolutionArray.push({
                    name: evolutionChain.species.name,
                    minLevel: !evolutionDetails ? 1 : evolutionDetails.min_level,
                    image: pokemon.sprites.other["official-artwork"].front_default,
                    id: pokemon.id,
                });
                evolutionChain = evolutionChain.evolves_to[0];
            } while (!!evolutionChain && evolutionChain.hasOwnProperty('evolves_to'));

            setEvolution(evolutionArray);
        } catch(error) {
            console.log("🚀 ~ file: Info.js ~ line 69 ~ getEvolution ~ error", error)
        }
    }

    return(
        <View style={styles.wrapper}>

            <View style={styles.tabButtons}>
                <TouchableOpacity style={styles.tab} onPress={() => setTabOptions([true, false, false])}>
                    <ImageBackground
                        resizeMode="cover"
                        source={tabOptions[0] ? POKEBALL : null}
                        style={styles.imageBackground}>
                    </ImageBackground>
                    <Text style={[styles.tabText, { fontWeight: tabOptions[0] ? '700' : '400' }]}>Pokémon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setTabOptions([false, true, false])}>
                    <ImageBackground
                        resizeMode="contain"
                        source={tabOptions[1] ? POKEBALL : null}
                        style={styles.imageBackground}>
                    </ImageBackground>
                    <Text style={[styles.tabText, { fontWeight: tabOptions[1] ? '700' : '400' }]}>Estadísticas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setTabOptions([false, false, true])}>
                    <ImageBackground
                        resizeMode="contain"
                        source={tabOptions[2] ? POKEBALL : null}
                        style={styles.imageBackground}>
                    </ImageBackground>
                    <Text style={[styles.tabText, { fontWeight: tabOptions[2] ? '700' : '400' }]}>Evolución</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                {tabOptions[0] && <About pokemon={pokemon} about={about} types={types} />}
                {tabOptions[1] && <Stats pokemon={pokemon} types={types} />}
                {tabOptions[2] && <Evolution pokemon={pokemon} evolution={evolution} />}
            </View>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 99,
    },
    tabButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    tab: {
        width: '25%',
        paddingTop: 15,
    },
    tabText: {
        fontSize: 16,
        color: textColor.white,
        alignSelf: 'center',
    },
    imageBackground: {
        width: 100,
        height: 100,
        position: 'absolute',
    },
    container: {
        height: 750,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: background.white,
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
});