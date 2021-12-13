import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Info = (props) => {

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Nombre del Pokemon
                    </Text>
                    <Text>Etiquetas etc...</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
});