import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
export default function Index() {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../assets/fonts/LilitaOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou um carregamento ou mensagem
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <Text
          style={{ fontFamily: 'Lilita One', marginBottom: 20, marginTop: 20, color: '#f2f2f2', fontSize: 22 }}
        >
          Coffee With Programation
        </Text>
    </View>
  );
}
