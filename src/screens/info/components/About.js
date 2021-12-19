import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { background, typeColors, textColor } from '../../../utils/colors';

const DashBoardTitle = ({title, styleColor}) => {
    return (
        <Text style={[styles.title, {color: styleColor}]}>{title}</Text>
    );
};

const InfoRow = ({label, description}) => {
    return (
        <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoDescription}>{description}</Text>
        </View>
    );
}

const About = ({ pokemon, about }) => {
    let description;
    let genera;
    const styleColor = typeColors[pokemon.types[0].type.name];

    if(about && about.description) {  // Elimina saltos de línea en la descripción
        description = about?.description.replace(/(\r\n|\n|\r)/gm, " ");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <DashBoardTitle title='Pokédex Data' styleColor={styleColor} style={styles.dashBoardTitle}/>
            <InfoRow label='Especie' description={about?.genera}/>
            <InfoRow label='Altura' description={pokemon?.height/10 + ' m'}/>
            <InfoRow label='Peso' description={pokemon?.weight + ' kg'}/>
            <InfoRow label='Habilidades' description={pokemon.abilities.join(", ")}/>
        </View> 
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 20,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: textColor.grey,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: '700',
        color: textColor.grey,
    },
    infoDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: textColor.grey,
    },
});