import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import { typeColors, textColor } from '../../../utils/colors';
import InfoRow from './InfoRow';
import DashBoardTitle from './DashboardTitle';

const About = ({ pokemon, about, types }) => {
    let description;
    const styleColor = typeColors[pokemon.types[0].type.name];

    if(about && about.description) {  // Elimina saltos de línea en la descripción
        description = about?.description.replace(/(\r\n|\n|\r)/gm, " ");
    }

    return(
        <View style={styles.container}>
            <DashBoardTitle title='Descripción' styleColor={styleColor} />
            <Text style={styles.description}>{description}</Text>
            
            <DashBoardTitle title='Datos Pokédex' styleColor={styleColor} />
            <InfoRow label='Especie' description={about?.genera}/>
            <InfoRow label='Altura' description={pokemon?.height/10 + ' m'}/>
            <InfoRow label='Peso' description={pokemon?.weight + ' kg'}/>
            <InfoRow label='Habilidades' description={pokemon.abilities.join(", ")}/>
            <InfoRow label='Debilidad' icons={types[0]?.double_damage_from}/>

            <DashBoardTitle title='Entrenamiento' styleColor={styleColor} />
            <InfoRow label='Especie' description={about?.genera}/>
            <InfoRow label='Altura' description={pokemon?.height/10 + ' m'}/>
            <InfoRow label='Peso' description={pokemon?.weight + ' kg'}/>
            <InfoRow label='Habilidades' description={pokemon.abilities.join(", ")}/>
            <InfoRow label='Debilidad' icons={types[0]?.double_damage_from}/>
        </View> 
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: textColor.grey,
    },
});