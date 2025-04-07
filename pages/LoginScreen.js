import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneContainer}>
        <View style={styles.content}>
          <View style={styles.bottomSection}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Connexion</Text>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>
                  Mot de passe oublié ?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.connexionButton}>
                <Text style={styles.connexionText}>Se connecter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.retourButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.retourText}>Retour</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomBar} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B3075",
  },
  phoneContainer: {
    flex: 1,
    borderRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: -30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingBottom: 40,
    paddingTop: 40,
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#000",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#1B3075",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 15,
    gap: 12,
  },
  connexionButton: {
    backgroundColor: "#1B3075",
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  connexionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  retourButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  retourText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomBar: {
    height: 30,
    backgroundColor: "#fff",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
