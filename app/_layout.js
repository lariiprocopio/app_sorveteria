import { Stack } from "expo-router";

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
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "Sorveteria Lala" }} />
      <Stack.Screen name="products" options={{ title: "Menu WP" }} />
    </Stack>
  );
}

