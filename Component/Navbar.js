import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import quran from '../assets/Quran1.jpg' 
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={styles.title}>
        <Image source={quran} style={styles.logo} />
      </View>
      <View style={styles.datas}>
          <Text onPress={() => navigation.navigate('Home')} style={styles.data}>Home</Text>
        <Text onPress={() => navigation.navigate('Surah')} style={styles.data}>Surah</Text>
          <Text onPress={() => navigation.navigate('Dua')} style={styles.data}>Dua</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    width: '100%',
     padding: 5,    
     
     marginTop:30
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50, 
    height: 50, 
    borderRadius:30
  },
  datas: {
    flexDirection: 'row',
    padding: 10,
  },
  data: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 16,
  },
});

export default Navbar;
