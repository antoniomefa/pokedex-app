import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { background, typeColors, textColor } from '../../../utils/colors';
import { POKEBALL } from '../../../assets/Images';

import About from './About';
import Stats from './Stats';
import Evolution from './Evolution';

const Dashboard = ({ pokemon, about }) => {
    const [tabOptions, setTabOptions] = useState([true, false, false]);

    return(
        <View style={styles.wrapper}>

            <View style={styles.tabButtons}>
                <TouchableOpacity style={styles.tab} onPress={() => setTabOptions([true, false, false])}>
                    <ImageBackground
                        resizeMode="cover"
                        source={tabOptions[0] ? POKEBALL : null}
                        style={styles.imageBackground}>
                    </ImageBackground>
                    <Text style={[styles.tabText, { fontWeight: tabOptions[0] ? '700' : '400' }]}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setTabOptions([false, true, false])}>
                    <ImageBackground
                        resizeMode="contain"
                        source={tabOptions[1] ? POKEBALL : null}
                        style={styles.imageBackground}>
                    </ImageBackground>
                    <Text style={[styles.tabText, { fontWeight: tabOptions[1] ? '700' : '400' }]}>Stats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setTabOptions([false, false, true])}>
                    <ImageBackground
                        resizeMode="contain"
                        source={tabOptions[2] ? POKEBALL : null}
                        style={styles.imageBackground}>
                    </ImageBackground>
                    <Text style={[styles.tabText, { fontWeight: tabOptions[2] ? '700' : '400' }]}>Evolution</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                {tabOptions[0] && <About pokemon={pokemon} about={about} />}
                {tabOptions[1] && <Stats pokemon={pokemon} about={about} />}
                {tabOptions[2] && <Evolution pokemon={pokemon} about={about} />}
            </View>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 99,
    },
    tabButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    tab: {
        width: '25%',
        paddingTop: 15,
    },
    tabText: {
        fontSize: 16,
        color: textColor.white,
        alignSelf: 'center',
    },
    imageBackground: {
        width: 100,
        height: 100,
        position: 'absolute',
    },
    container: {
        height: 750,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: background.white,
        paddingHorizontal: 40,
        paddingVertical: 30,
    },
});