import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { PersonaLista } from "@/app/Presentation/Views/PersonaLista";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <PersonaLista />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" }
});
