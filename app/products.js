import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import lista from './products.json';
import imageJunta from './imageJuntas';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Products() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.tituloMenu}>
                    Pra gente que ama sorvete! <Icon name="heart" size={20} color="#fff" />
                </Text>

                {lista.listaP.map((item) => (
                    <View key={item.id} style={styles.cardMenu}>
                        <View style={styles.cardMenuDetails}>
                        <Image source={imageJunta[item.image]} style={styles.imageMenu} />
                            <View style={styles.cardMenuText}>
                                <Text style={styles.itemTwotitleProduct}>{item.id}. {item.title}</Text>
                                <Text style={styles.itemTwodescriptionProduct}>{item.description}</Text>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                                <Link
                                    href={{
                                        pathname: "/sorvetesingle/id",
                                        params: { id: item.id }
                                    }}
                                    style={styles.itemTwoButton} // Estilo do link para ser um botão
                                    asChild
                                >
                            <TouchableOpacity>
                                <Text style={styles.itemTwoButtonText}>
                                    Acessar
                                </Text>
                                {/* <View style={styles.linkIcon}>
                                    <Icon name="chevron-right" size={20} color="#fff" />
                                </View> */}
                            </TouchableOpacity>
                        </Link>
                        </View>
                    </View>
                ))
                }
            </View>
        </ScrollView >
    );
}