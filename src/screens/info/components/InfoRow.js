import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Tag from '../../../components/Tag';
import { textColor } from '../../../utils/colors';

const InfoRow = ({label, description, icons}) => {
    return (
        <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoDescription}>{description}</Text>
            {icons &&
                icons.map((icon, index) => (
                <Tag type={icon.name} key={index} isIcon/>
            ))}
        </View>
    );
}

export default InfoRow;

const styles = StyleSheet.create({
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    infoLabel: {
        fontSize: 16,
        width: '40%',
        fontWeight: '700',
        color: textColor.grey,
    },
    infoDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: textColor.grey,
    },
});