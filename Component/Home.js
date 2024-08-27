import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import QuranAnimatation from '../Quran.json'; 

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <LottieView 
          source={QuranAnimatation} 
          autoPlay 
          loop 
          style={styles.animation}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Quran App</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Surah')}>
          <Text style={styles.buttonText}>View Surahs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dua')}>
          <Text style={styles.buttonText}>View Duas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PrayerTime')}>
          <Text style={styles.buttonText}>Prayer Times</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  animation: {
    width: '100%',
    height: 300,  // Adjust height as needed
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
