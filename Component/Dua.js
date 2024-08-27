
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Navbar from './Navbar'; 
import { useNavigation } from '@react-navigation/native';

const data =[
    
    {
        "id": 1,
        "title": "Dua Before Eating",
        "text": "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ\nBismillah wa 'ala barakatillah\n(In the name of Allah and with the blessings of Allah)"
      },
      {
        "id": 2,
        "title": "Dua After Eating",
        "text": "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِي مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ\nAlhamdulillahilladhi at'amani hadha wa razaqani min ghayri hawlin minni wa la quwwah\n(Praise be to Allah who fed me this and provided it to me without any power or strength on my part)"
      },
      {
        "id": 3,
        "title": "Dua Before Sleeping",
        "text": "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا\nAllahumma bismika amutu wa ahya\n(O Allah, in Your name I die and I live)"
      },
      {
        "id": 4,
        "title": "Dua Upon Waking Up",
        "text": "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانِي بَعْدَمَا أَمَاتَنِي وَإِلَيْهِ النُّشُورُ\nAlhamdulillahilladhi ahyayani ba'dama amatani wa ilayhin-nushur\n(Praise be to Allah who gave me life after He caused me to die, and to Him is the resurrection)"
      },
      {
        "id": 5,
        "title": "Dua Before Starting a Journey",
        "text": "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ\nBismillah wa 'ala barakatillah\n(In the name of Allah and with the blessings of Allah)"
      },
      {
        "id": 6,
        "title": "Dua for Safe Travel",
        "text": "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَـٰذَا البَرَّ وَالتَّقْوَىٰ وَمِنَ الْعَمَلِ مَا تَرْضَىٰ\nAllahumma innana nas'aluka fi safarina hadha al-barr wa at-taqwa wa mina al-'amali ma tardha\n(O Allah, we ask You for righteousness and piety on this journey and from the deeds that please You)"
      },
      {
        "id": 7,
        "title": "Dua Before Drinking Water",
        "text": "بِسْمِ اللَّهِ\nBismillah\n(In the name of Allah)"
      },
      {
        "id": 8,
        "title": "Dua After Drinking Water",
        "text": "الْحَمْدُ لِلَّهِ الَّذِي سَقَانِي هَـٰذَا وَرَزَقَنِي مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ\nAlhamdulillahilladhi saqani hadha wa razaqani min ghayri hawlin minni wa la quwwah\n(Praise be to Allah who gave me this to drink and provided it to me without any power or strength on my part)"
      },
      {
        "id": 9,
        "title": "Dua Before Entering the Bathroom",
        "text": "بِسْمِ اللَّهِ اللّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ\nBismillah Allahumma inni a'udhu bika min al-khubthi wal-khaba'ith\n(In the name of Allah. O Allah, I seek refuge in You from the male and female devils)"
      },
      {
        "id": 10,
        "title": "Dua After Leaving the Bathroom",
        "text": "غُفْرَانَكَ\nGhufranak\n(I ask for Your forgiveness)"
      },
      {
          "id": 11,
          "title": "Mirror Dua",
          "text": "اللهم أنت حسنت خلقي فحسن خلقي \nAllahumma anta hassanta khalqi fahassin khuluqi.",
        }
      

]

export default function DuaScreen() {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      marginVertical: 8,
    },
  });
