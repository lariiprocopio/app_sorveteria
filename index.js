import { Text, View, Image, ImageBackground, TouchableOpacity} from "react-native";
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
    <View>
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/images/bg_rosa.png')}
      style={styles.background}

    >
      
      <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 300,
            opacity: 1,
            alignItems: "center",
           
          }}
          source={require('../assets/images/imgIndex.png')}
        />
      
     
    
 
    
   
    
    </ImageBackground>

<View style={styles.viewIndex}>

<Text
    style={{ fontFamily: "Lilita One" , marginBottom: 20, marginTop: 20, color: '#f2f2f2', fontSize: 22, textAlign:"center" }}
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


<Link href="/products" style={styles.btn} asChild>
    <TouchableOpacity>
      <Text style={styles.btnText}>
        Contatos
      </Text>
    </TouchableOpacity>
  </Link>
  <Link href="/products" style={styles.btn} asChild>
    <TouchableOpacity>
      <Text style={styles.btnText}>
        Sobre nós
      </Text>
    </TouchableOpacity>
  </Link>
</View>
</View>
  );
}
