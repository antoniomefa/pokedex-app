import React from 'react';
import { StyleSheet, View } from 'react-native';

import { typeColors, textColor } from '../../../utils/colors';
import DashBoardTitle from './DashboardTitle';
import GraphicRow from './GraphicRow';
import InfoRow from './InfoRow';

const About = ({ pokemon, types }) => {
    const styleColor = typeColors[pokemon.types[0].type.name];

    return(
        <View >
            <DashBoardTitle title='Estadísticas base' styleColor={styleColor} />
            {
                pokemon.stats.map((stat, index) => {
                    return(
                    <GraphicRow stat={stat} styleColor={styleColor} key={index}/>
                )})
            }

            <DashBoardTitle title='Daño inflingido' styleColor={styleColor} />
            <InfoRow label='X 2' icons={types[0]?.double_damage_to}/>
            <InfoRow label='X 0.5' icons={types[0]?.half_damage_to}/>
            <InfoRow label='X 0' icons={types[0]?.no_damage_to}/>
            
            <DashBoardTitle title='Daño recibido' styleColor={styleColor} />
            <InfoRow label='X 2' icons={types[0]?.double_damage_from}/>
            <InfoRow label='X 0.5' icons={types[0]?.half_damage_from}/>
            <InfoRow label='X 0' icons={types[0]?.no_damage_from}/>
        </View> 
    );
};

export default About;