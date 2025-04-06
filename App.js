import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native';

const messages = [
  "Découvrez des services\nprès de chez vous",
  "Échangez directement\navec les prestataires",
  "Réservez en toute\nsimplicité"
];

export default function App() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneContainer}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image 
              source={require('./assets/phone-hand.png')}
              style={styles.phoneImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>{messages[currentMessageIndex]}</Text>
            </View>
            <View style={styles.dotsContainer}>
              {messages.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === currentMessageIndex && styles.activeDot,
                  ]}
                />
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.connexionButton}>
                <Text style={styles.connexionText}>Connexion</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.compteButton}>
                <Text style={styles.compteText}>Ouvrir un compte</Text>
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
    backgroundColor: '#4CAF50',
  },
  phoneContainer: {
    flex: 1,
    borderRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: -30,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#4CAF50',
    paddingBottom: -20,
  },
  phoneImage: {
    width: '100%',
    height: '90%',
    marginBottom: -20,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 40,
    paddingTop: 20,
  },
  messageContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  message: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    color: '#000',
    lineHeight: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
    gap: 12,
  },
  connexionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
  },
  connexionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  compteButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
  },
  compteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomBar: {
    height: 30,
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
