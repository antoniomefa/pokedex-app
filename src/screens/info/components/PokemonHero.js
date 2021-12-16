import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { width } from '../../../utils/constants';
import { textColor } from '../../../utils/colors';

import { PATTERN } from '../../../assets/Images';
import { CIRCLE } from '../../../assets/Images';

import Tag from '../../../components/Tag';

export default PokemonHero = ({ pokemon }) => {
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
                source={CIRCLE}
                style={styles.imageBackground}
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
                <View style={styles.vectorContainer}>
                    <Image source={PATTERN} style={styles.vectorImage} />
                </View>

                <Text style={styles.number}>#{nationalNumber}</Text>
                <Text style={styles.name}>{pokemon.name}</Text>
                
                <View style={styles.typesRow}>
                    {pokemon.types.map((type, index) => (
                        <Tag type={type.type.name} key={index}/>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoPokemon: {
      padding: 20,
      width: width / 1.8
    },
    number: {
      fontSize: 16,
      fontWeight: '700',
      color: textColor.number,
    },
    name: {
      fontSize: 30,
      fontWeight: '700',
      color: textColor.white,
      textTransform: 'capitalize',
    },
    typesRow: {
      flexDirection: 'row',
    },
    vectorContainer: {
      position: 'absolute',
      right: -20, 
      top: 100,
    },
    vectorImage: {
      width: 70,
      height: 70
    },
    imageContainer: {
    },
    imageBackground: {
      width: 140,
      height: 140,
    },
    image: {
      width: 140,
      height: 140,
    },
  });