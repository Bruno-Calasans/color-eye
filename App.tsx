import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useImageColors from "./hooks/useImageColor";

export default function App() {
  const { mainColor } = useImageColors();

  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: mainColor ? mainColor : "black",
        }}
      >
        Open up App.tsx to start working on your app
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
