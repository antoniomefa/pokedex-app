import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { width } from '../../../utils/constants';
import { textColor, backgroundTypeColors } from '../../../utils/colors';

import { DOTS_CARD } from '../../../assets/Images';
import { POKEBALL_CARD } from '../../../assets/Images';

import Tag from './Tag';

export default PokemonCard = ({ pokemon }) => {
  let nationalNumber = pokemon.id.toString();
  if(nationalNumber.length < 3) {
    for (let i=0; i<=3-nationalNumber.length; i++) {
      nationalNumber = '0' + nationalNumber;
    }
  }
  console.log(pokemon);

  return (
    <View style={[styles.card, { backgroundColor: backgroundTypeColors[pokemon.types[0].type.name]} ]}>

      <View style={styles.infoPokemon}>

        <View style={styles.vectorContainer}>
          <Image source={DOTS_CARD} style={styles.vectorImage} />
        </View>

        <Text style={styles.number}>#{nationalNumber}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.typesRow}>
          {pokemon.types.map((type, index) => (
            <Tag type={type.type.name} key={index}/>
          ))}
        </View>
      </View>

      <ImageBackground
        resizeMode="contain"
        source={POKEBALL_CARD}
        style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: pokemon.image,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 115,
  },
  infoPokemon: {
    padding: 20,
    width: width / 1.8
  },
  number: {
    fontSize: 12,
    fontWeight: '700',
    color: textColor.number,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: textColor.white,
    textTransform: 'capitalize',
  },
  typesRow: {
    flexDirection: 'row',
  },
  vectorContainer: {
    position: 'absolute',
    right: 0, 
    top: 5,
  },
  vectorImage: {
    width: 100,
    height: 40
  },
  imageContainer: {
    marginLeft: -25,
  },
  imageBackground: {
    marginTop: -25,
    width: 140,
    height: 140,
  },
  image: {
    width: 130,
    height: 130,
  },
});
