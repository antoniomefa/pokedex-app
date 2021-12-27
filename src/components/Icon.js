import React from 'react';
import { View } from 'react-native';
import { textColor } from '../utils/colors';

import bug from '../assets/Icons/bug.svg';
import dark from '../assets/Icons/dark.svg';
import electric from '../assets/Icons/electric.svg';
import fairy from '../assets/Icons/fairy.svg';
import fighting from '../assets/Icons/fighting.svg';
import dragon from '../assets/Icons/dragon.svg';
import filter from '../assets/Icons/filter.svg';
import fire from '../assets/Icons/fire.svg';
import flying from '../assets/Icons/flying.svg';
import generation from '../assets/Icons/generation.svg';
import ghost from '../assets/Icons/ghost.svg';
import grass from '../assets/Icons/grass.svg';
import ground from '../assets/Icons/ground.svg';
import ice from '../assets/Icons/ice.svg';
import normal from '../assets/Icons/normal.svg';
import poison from '../assets/Icons/poison.svg';
import psychic from '../assets/Icons/psychic.svg';
import rock from '../assets/Icons/rock.svg';
import search from '../assets/Icons/search.svg';
import sort from '../assets/Icons/sort.svg';
import steel from '../assets/Icons/steel.svg';
import water from '../assets/Icons/water.svg';

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

