import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Contato() {
    const handlePhonePress = () => {
        Linking.openURL('tel:+5511999999999'); // Substitua pelo telefone da loja
    };

    const handleEmailPress = () => {
        Linking.openURL('mailto:contato@loja.com'); // Substitua pelo e-mail da loja
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contatos da Loja <Icon name="phone" size={20} color="#fff" /></Text>
            <View style={styles.contactInfo}>
                <Text style={styles.label}>Endereço:</Text>
                <Text style={styles.info}>Rua Exemplo, 123 - Centro, Cidade - Estado</Text>
            </View>
            <View style={styles.contactInfo}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.info} onPress={handlePhonePress}>
                    +55 11 99999-9999
                </Text>
            </View>
            <View style={styles.contactInfo}>
                <Text style={styles.label}>E-mail:</Text>
                <Text style={styles.info} onPress={handleEmailPress}>
                    contato@loja.com
                </Text>
            </View>
            <View style={styles.contactInfo}>
                <Text style={styles.label}>Whatsapp:</Text>
                <Text style={styles.info} onPress={handleEmailPress}>
                   99825-9070
                </Text>
            </View>
            <Text style={styles.title}>Siga nossas redes socias   <Icon name="bell" size={20} color="#fff" /></Text>
            <View style={styles.contactInfo}>
                <Text style={styles.label}>Instagram:</Text>
                <Text style={styles.info} onPress={handleEmailPress}>
                    @sorveterialala
                </Text>
            </View>
            <View style={styles.contactInfo}>
                <Text style={styles.label}>Fcebook:</Text>
                <Text style={styles.info} onPress={handleEmailPress}>
                  Sorveteria Lala
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f285ad',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4A2C2A',
        marginBottom: 20,
        textAlign: 'center',
    },
    contactInfo: {
        marginBottom: 15,
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A2C2A',
    },
    info: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },
});
