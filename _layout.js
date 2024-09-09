import { Stack } from "expo-router";
import { Image } from "react-native";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f2d785",
        },
        headerTintColor: "#8c4d3f",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    
    >
      <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 300,
            opacity: 1,
            alignItems: "center",
           
          }}
          source={require('../assets/images/imgIndex.png')}
        />
      
       
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "Sorveteria Lala" }} />
      <Stack.Screen name="products" options={{ title: "Menu WP" }} />
    </Stack>
  );
}

