import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrayerTime = () => {
  const navigation = useNavigation();
  const newPrayerTimes = {
    fajr: '05:15 AM',
    dhuhr: '1:30 PM',
    asr: '5.10 PM',
    maghrib: '06:45 PM',
    isha: '08:15 PM',
    jummah: '01:30 PM', 
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Prayer Times</Text> */}
      <View style={styles.prayerTimesContainer}>
        <Text style={styles.prayerTime}>Fajr: {newPrayerTimes.fajr}</Text>
        <Text style={styles.prayerTime}>Dhuhr: {newPrayerTimes.dhuhr}</Text>
        <Text style={styles.prayerTime}>Asr: {newPrayerTimes.asr}</Text>
        <Text style={styles.prayerTime}>Maghrib: {newPrayerTimes.maghrib}</Text>
        <Text style={styles.prayerTime}>Isha: {newPrayerTimes.isha}</Text>
        <Text style={styles.prayerTime}>Jummah: {newPrayerTimes.jummah}</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Center-align the header text
  },
  prayerTimesContainer: {
    marginBottom: 20,
    alignItems: 'center', // Center-align the prayer times within the container
  },
  prayerTime: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center', // Center-align each prayer time
  },
});

export default PrayerTime;
