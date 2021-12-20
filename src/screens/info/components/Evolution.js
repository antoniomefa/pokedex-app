import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { typeColors, textColor } from '../../../utils/colors';
import DashBoardTitle from './DashboardTitle';
import EvolutionAvatar from './EvolutionAvatar';

const About = ({ pokemon, evolution }) => {
    const styleColor = typeColors[pokemon.types[0].type.name];

    return(
        <View >
            <DashBoardTitle title='Cadena evolutiva' styleColor={styleColor} />
            <View style={styles.evolutionChainWrapper} >
            {
                evolution && evolution.map((pokemon, index) => {
                    return(
                        <View key={index}>
                            {
                                index !== 0 && 
                                <Text style={styles.nextLevelText}>{`En el nivel ${pokemon.minLevel} evoluciona en :`}</Text>
                            }
                            <EvolutionAvatar pokemon={pokemon} />
                        </View>
                    )
                })
            }
            </View>
        </View> 
    );
};

export default About;

const styles = StyleSheet.create({
    evolutionChainWrapper: {
        alignItems: 'center',
    },
    nextLevelText: {
        color: textColor.grey,
        fontSize: 16,
        marginVertical: 16,
        fontWeight: '500',
    },
});