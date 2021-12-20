import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

import {typeColors, textColor} from '../utils/colors';

import Icon from './Icon';

const Tag = ({type, isIcon}) => {
  return (
    <View style={{...styles.tag, backgroundColor: typeColors[type]}}>
      <Icon style={{paddingHorizontal: 0, color: 'white'}}  width={15} height={15} name={type}/>
      {
        !isIcon &&
        <Text style={styles.text}>
          {type}
        </Text>
      }
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    justifyContent: 'center',
    maxWidth: '80%',
    padding: 5.5,
    marginTop: 5,
    marginRight: 5,
    borderRadius: 3,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: textColor.white,
    textTransform: 'capitalize',
  }
});
