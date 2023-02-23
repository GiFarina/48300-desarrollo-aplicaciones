import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import { height, width } from "./src/cosntatns";

export default function App() {

  useEffect(() => {
    console.log(height, width);
  },[])
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
    <View style={styles.container}>
      <Image
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        source={{
          uri: "https://placeimg.com/640/480/any",
        }}
      />
      <View style={{
        position: 'absolute'
      }}>
        <Button />
      </View>
    </View>
    </SafeAreaView>
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
