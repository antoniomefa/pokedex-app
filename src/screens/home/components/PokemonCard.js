import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { width } from '../../../utils/constants';
import { backgroundTypeColors } from '../../../utils/colors';

import { DOTS_CARD } from '../../../assets/Images';
import { POKEBALL_CARD } from '../../../assets/Images';

// import Tag from './Tag';

export default PokemonCard = ({ pokemon }) => {
  let nationalNumber = pokemon.id.toString();
  if(nationalNumber.length < 3) {
    for (let i=0; i<=3-nationalNumber.length; i++) {
      nationalNumber = '0' + nationalNumber;
    }
  }
  console.log(pokemon);

  return (
    <View style={[styles.card, { backgroundColor: backgroundTypeColors[pokemon.type]} ]}>
      <View style={{padding: 15, paddingRight: 0, width: width / 1.8}}>
        <View style={{position: 'absolute', right: 0, top: 5}}>
          <Image source={DOTS_CARD} style={{width: 100, height: 40}} />
        </View>
        <Text style={styles.number}>#{nationalNumber}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.row}>
          {/* <Tag type={type} />
          <Tag type="poison" /> */}
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
    marginVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: -10,
    marginLeft: -10,
  },
  imageBackground: {
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
