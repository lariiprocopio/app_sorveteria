import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import lista from '../products.json';
import imageJunta from '../imageJuntas';

export default function CoffeeSingle() {
    const { id } = useLocalSearchParams();
    const data = lista.listaP.find((item) => item.id == id);

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={imageJunta[data.image]}
            />
            <View style={styles.containerSingle}>
                <Text style={styles.titleProduct}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>Preço: {data.price}</Text> {/* Exibir preço */}
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Mais sobre este produto:</Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.details}>Ideal para: {data.idealFor}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.details}>Sabor: {data.flavor}</Text>
                </TouchableOpacity>
                {/* Exibir ingredientes em uma lista */}
                <Text style={styles.footerText}>Ingredientes:</Text>
                {data.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.details}>- {ingredient}</Text>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f285ad',
        padding: 10,
    },
    containerSingle: {
        padding: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    titleProduct: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A2C2A',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
        lineHeight: 22,
        marginBottom: 20,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4A2C2A',
        marginBottom: 10,
    },
    footer: {
        padding: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4A2C2A',
    },
    details: {
        fontSize: 14,
        color: '#8c4d3f',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#f285ad',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#f2f2f2',
        fontWeight: 'bold',
    },
});