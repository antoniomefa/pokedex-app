import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { background, typeColors, textColor } from '../../../utils/colors';

const Evolution = ({ pokemon, about }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.description}>Evolution</Text>
        </View> 
    );
};

export default Evolution;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: textColor.grey,
    },
});