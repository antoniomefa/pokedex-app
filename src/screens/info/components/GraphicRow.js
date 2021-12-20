import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { textColor } from '../../../utils/colors';

const GraphicRow = ({stat, styleColor}) => {
    return (
        <View style={styles.graphRow}>
            <Text style={styles.graphicLabel}>{stat.stat.name}</Text>
            <Text style={styles.graphicValue}>{stat.base_stat}</Text>
            <View style={styles.progressBar}>
                <View style={styles.progressBarRow}>
                    <View style={[styles.filledSpace, {width: `${stat.base_stat/2}%`, backgroundColor: styleColor}]}></View>
                </View>
            </View>
        </View>
    );
}

export default GraphicRow;

const styles = StyleSheet.create({
    graphRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    graphicLabel: {
        fontSize: 14,
        width: '37%',
        fontWeight: '700',
        color: textColor.grey,
    },
    graphicValue: {
        fontSize: 16,
        color: textColor.grey,
        width: '10%',
        fontWeight: '400',
    },
    progressBar: {
        borderRadius: 25,
        borderColor: textColor.grey,
        borderWidth: 1,
        width: '53%'
    },
    progressBarRow: {
        flexDirection: 'row',
        height: 8
    },
    filledSpace: {
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25
    }
});