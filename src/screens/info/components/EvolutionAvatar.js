import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { textColor, background } from '../../../utils/colors';
import { POKEBALL_AVATAR } from '../../../assets/Images';

export default EvolutionAvatar = ({ pokemon }) => {
    let nationalNumber = pokemon.id.toString();
    if(nationalNumber.length < 3) {
        for (let i=0; i<=3-nationalNumber.length; i++) {
        nationalNumber = '0' + nationalNumber;
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
              resizeMode="contain"
              source={POKEBALL_AVATAR}
              style={styles.imageBackground}
              tintColor={background.pressed_input}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                  uri: pokemon.image,
                  }}
                />
              </View>
            </ImageBackground>
            <View style={styles.infoPokemon}>
              <Text style={styles.number}>#{nationalNumber}</Text>
              <Text style={styles.name}>{pokemon.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 100,
      height: 120,
    },
    imageBackground: {
      height: 80,
      width: 80,
      justifyContent: 'center',
    },
    imageContainer: {
      alignItems: 'center',
    },
    image: {
      width: 75,
      height: 75,
    },
    infoPokemon: {
      alignItems: 'center',
    },
    number: {
      fontSize: 12,
      fontWeight: '700',
      color: textColor.number,
    },
    name: {
      fontSize: 16,
      fontWeight: '700',
      color: textColor.black,
      textTransform: 'capitalize',
    },
  });