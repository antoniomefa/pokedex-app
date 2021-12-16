import React from 'react';
import { View } from 'react-native';
import { textColor } from '../../../utils/colors';

import bug from '../../../assets/Icons/bug';
import dark from '../../../assets/Icons/dark';
import electric from '../../../assets/Icons/electric';
import fairy from '../../../assets/Icons/fairy';
import fighting from '../../../assets/Icons/fighting';
import dragon from '../../../assets/Icons/dragon';
import filter from '../../../assets/Icons/filter';
import fire from '../../../assets/Icons/fire';
import flying from '../../../assets/Icons/flying';
import generation from '../../../assets/Icons/generation';
import ghost from '../../../assets/Icons/ghost';
import grass from '../../../assets/Icons/grass';
import ground from '../../../assets/Icons/ground';
import ice from '../../../assets/Icons/ice';
import normal from '../../../assets/Icons/normal';
import poison from '../../../assets/Icons/poison';
import psychic from '../../../assets/Icons/psychic';
import rock from '../../../assets/Icons/rock';
import search from '../../../assets/Icons/search';
import sort from '../../../assets/Icons/sort';
import steel from '../../../assets/Icons/steel';
import water from '../../../assets/Icons/water';

const Icon = ({children, onPress, name, style, width, height, ...props}) => {
  let RenderIcon;

  switch (name) {
    case 'bug':
        RenderIcon = bug;
        break;
    case 'dark':
        RenderIcon = dark;
        break;
    case 'electric':
        RenderIcon = electric;
        break;
    case 'fairy':
        RenderIcon = fairy;
        break;
    case 'fighting':
        RenderIcon = fighting;
        break;
    case 'dragon':
        RenderIcon = dragon;
        break;
    case 'filter':
        RenderIcon = filter;
        break;
    case 'fire':
        RenderIcon = fire;
        break;
    case 'flying':
        RenderIcon = flying;
        break;
    case 'generation':
        RenderIcon = generation;
        break;
    case 'ghost':
        RenderIcon = ghost;
        break;
    case 'grass':
        RenderIcon = grass;
        break;
    case 'ground':
        RenderIcon = ground;
        break;
    case 'ice':
        RenderIcon = ice;
        break;
    case 'normal':
        RenderIcon = normal;
        break;
    case 'poison':
        RenderIcon = poison;
        break;
    case 'psychic':
        RenderIcon = psychic;
        break;
    case 'rock':
        RenderIcon = rock;
        break;
    case 'search':
        RenderIcon = search;
        break;
    case 'sort':
        RenderIcon = sort;
        break;
    case 'steel':
        RenderIcon = steel;
        break;
    case 'water':
        RenderIcon = water;
        break;
    default:
        RenderIcon = dark;
  }
  return (
    <View
        style={{...style}}
        onPress={onPress}>
        {name ? (
            <RenderIcon height={height} width={width} color={textColor.white} />
        ) : (
            children
        )}
    </View>
  );
};

export default Icon;

