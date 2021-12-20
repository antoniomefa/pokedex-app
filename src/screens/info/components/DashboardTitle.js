import React from 'react';
import { StyleSheet, Text } from 'react-native';

const DashboardTitle = ({title, styleColor}) => {
    return (
        <Text style={[styles.title, {color: styleColor}]}>{title}</Text>
    );
};

export default DashboardTitle;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 20,
    },
});