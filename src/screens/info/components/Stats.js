import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { background, typeColors, textColor } from '../../../utils/colors';

const Stats = ({ pokemon, about }) => {

    return(
        <View style={styles.container}>
            <Text style={[styles.title, {color: typeColors[pokemon.types[0].type.name]}]}>Dashboard</Text>
        </View> 
    );
};

export default Stats;

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: textColor.grey,
    },
});