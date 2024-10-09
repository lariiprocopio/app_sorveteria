import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import styles from './styles.js';

export default function Index() {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../assets/fonts/LilitaOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou um carregamento ou mensagem
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/bg_rosa.png')}
        style={styles.background}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: '100%', // Use percentual
              height: 300, // Mantenha a proporção
              aspectRatio: 1, // Mantenha a imagem redonda
              borderRadius: 300, // Reduzido para corresponder ao tamanho
              opacity: 1,
            }}
            source={require('../assets/images/imgIndex.png')}
          />
        </View>
      </ImageBackground>

      <View style={styles.viewIndex}>
        <Text
          style={{
            fontFamily: "Lilita One",
            marginBottom: 20,
            marginTop: 20,
            color: '#f2f2f2',
            fontSize: 22,
            textAlign: "center"
          }}
        >
          Melhor sorveteria da cidade
        </Text>

        <Link href="/products" style={styles.btn} asChild>
          <TouchableOpacity>
            <Text style={styles.btnText}>
              Cardápio
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/contato" style={styles.btn} asChild>
          <TouchableOpacity>
            <Text style={styles.btnText}>
              Contatos
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/sobre" style={styles.btn} asChild>
          <TouchableOpacity>
            <Text style={styles.btnText}>
              Sobre nós
            </Text>
          </TouchableOpacity>
        </Link>

        <Image
          style={{
            width: '100%', // Use percentual
            height: 200,
            opacity: 1,
            alignSelf: 'center', // Centralize a imagem
            marginTop: 20,
            position: 'absolute', // Posiciona a imagem em relação ao container
            bottom: 0, // Alinha na parte inferior
          }}
          source={require('../assets/images/sorveteBaixo.jpg')}
        />
      </View>
    </View>
  );
}
