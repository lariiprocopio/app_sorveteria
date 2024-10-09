import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function SobreNos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre Nós</Text>
            <Image 
                style={styles.image} 
                source={require('../assets/images/logo.png')} // Substitua pelo caminho da sua imagem
                resizeMode="cover"
            />
            <Text style={styles.description}>
                Somos uma loja dedicada a oferecer os melhores produtos com qualidade e carinho. 
                Nossa missão é proporcionar aos nossos clientes uma experiência de compra única e agradável.
            </Text>
            <Text style={styles.subtitle}>Nossa História</Text>
            <Text style={styles.description}>
                Fundada em 2020, nossa loja nasceu da paixão por sorvetes. 
                Desde então, temos trabalhado para trazer os melhores produtos e um atendimento excepcional.
            </Text>
            <Text style={styles.subtitle}>Nossos Valores</Text>
            <Text style={styles.description}>
                - Qualidade: Garantimos que todos os nossos produtos passam por rigorosos padrões de qualidade.{'\n'}
                - Atendimento: Valorizamos nossos clientes e buscamos sempre oferecer o melhor atendimento.{'\n'}
                - Sustentabilidade: Estamos comprometidos em práticas sustentáveis e responsáveis.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4A2C2A',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200, // Ajuste a altura conforme necessário
        borderRadius: 10,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A2C2A',
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        marginTop: 10,
    },
});
