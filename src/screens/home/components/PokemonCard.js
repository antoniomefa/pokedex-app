import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { width } from '../../../utils/constants';
import { backgroundColors } from '../../../utils/colors';

import { DOTS_CARD } from '../../../assets/Images';
import { POKEBALL_CARD } from '../../../assets/Images';

// import Tag from './Tag';

export default PokemonCard = ({ pokemon }) => {
  let type = 'grass';
  if (pokemon > 3) {
    type = 'fire';
  }

  return (
    <View style={{...styles.card, backgroundColor: backgroundColors[type]}}>
      <View style={{padding: 15, paddingRight: 0, width: width / 1.8}}>
        <View style={{position: 'absolute', right: 0, top: 5}}>
          <Image source={Dots_card} style={{width: 100, height: 40}} />
        </View>
        <Text style={styles.number}>#0001</Text>
        <Text style={styles.title}>Bulbasaur</Text>
        <View style={styles.row}>
          <Tag type={type} />
          <Tag type="poison" />
        </View>
      </View>

      <ImageBackground
        resizeMode="contain"
        source={Pokeball_card}
        style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon}.png`,
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
