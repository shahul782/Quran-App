import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SurahScreen() {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then((response) => response.json())
      .then((data) => {
        setSurahs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Surah data:', error);
        setLoading(false);
      });
  }, []);

  const renderAyah = ({ item }) => (
    <View style={styles.ayahContainer}>
      <Text style={styles.ayahText}>{item.text}</Text>
      <Text style={styles.translationText}>{item.translation}</Text>
      
    </View>
  );

  const renderSurah = ({ item }) => (
    <View style={styles.surahContainer}>
      <Text style={styles.surahName}>{`Surah ${item.number}: ${item.englishName}`}</Text>
      <FlatList
        data={item.ayahs}
        keyExtractor={(ayah) => ayah.number.toString()}
        renderItem={renderAyah}
      />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={surahs}
        keyExtractor={(surah) => surah.number.toString()}
        renderItem={renderSurah}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  surahContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  flex:1,
  flexDirection:"row",
  },
  surahName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ayahContainer: {
    marginBottom: 10,
  },
  ayahText: {
    fontSize: 16,
    color: '#333',
  },
  translationText: {
    fontSize: 14,
    color: '#666',
  },
});
