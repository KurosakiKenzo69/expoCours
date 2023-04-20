  import { StatusBar } from 'expo-status-bar';
  import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

  const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000 m d\'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kg",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80
    },

    text: {
      color: '#ff0000',
      fontWeight: 'bold',
      fontSize: 30,
    },

    obj: {
      fontWeight: 'bold'
    },

    input: {
      borderWidth: 2,
      marginTop: 20, 
      height: 30,
      width: 180,
      position: "relative",
      right: 40,
      fontSize: 16, 
      paddingLeft: 14,
      borderRadius: 3
    },

    button: {
      // backgroundColor: "black",
      // height: ,
      fontSize: 16,
    },

    list: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingHorizontal: 15,
      marginVertical: 3,
      marginHorizontal: 16,
      backgroundColor: '#0728CD',
      color: 'white',
      borderRadius: 5,
    },
    


    listEntier: {
      marginTop: 20
    },

    row: {
      flexDirection: "row",
      height: 38,
      // alignItems: "center",
      justifyContent: "space-between",
      marginTop: 15
    }
  });

  export default function App() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Bonjour !</Text>
          <Text style={styles.obj}> Voici les objectifs de vie </Text>
          <View style={styles.row}>          
          <TextInput style={styles.input} placeholder="Objectif" placeholderTextColor="black"/>
          <Button style={styles.button} color="black" title="add"></Button>
          </View>
          <FlatList
              style={styles.listEntier}
              data={sampleGoals}
              renderItem={({item}) => <Text style={styles.list}>{item}</Text>}
              keyExtractor={(item, index) => index.toString()}
          />
          <StatusBar style="auto"/>
        </View>
    );
  }
