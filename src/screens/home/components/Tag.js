import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {typeColors, textColor} from '../../../utils/colors';
import Icon from './Icon';

const Tag = ({type}) => {
  return (
    <View style={{...styles.tag, backgroundColor: typeColors[type]}}>
      {/* <Icon style={{paddingHorizontal: 0}} name={type} width={10} height={10} /> */}
      <Text style={styles.text}>
        {type}
      </Text>
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
    marginLeft: 2,
    fontSize: 12,
    fontWeight: 'bold',
    color: textColor.white,
    textTransform: 'capitalize',
  }
});
