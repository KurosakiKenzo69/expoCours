import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


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

  delete: {
    backgroundColor: '#E20000',
  },

  list: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    marginVertical: 3,
    marginHorizontal: 16,
    backgroundColor: '#9F9E9E',
    color: 'white',
    borderRadius: 5,
  },

  listEntier: {
    marginTop: 40
  },

  row: {
    flexDirection: "row",
    height: 38,
    alignItems: "center",
    justifyContent: "center", // Modifiez cette ligne
    marginTop: 15
  }
});

export default function App() {
  const [goals, setGoals] = useState(sampleGoals);
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    // Mettre à jour la liste des objectifs à chaque modification de l'état `goals`
  }, [goals]);

  const handleAddGoal = () => {
    // Ajouter le nouvel objectif à la liste `goals`
    setGoals([...goals, newGoal]);
    setNewGoal('');
  };

  const deleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour !</Text>
      <Text style={styles.obj}> Voici les objectifs de vie </Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Objectif"
          placeholderTextColor="black"
          value={newGoal}
          onChangeText={setNewGoal}
        />
        <Button
          style={styles.button}
          color="black"
          title="add"
          onPress={handleAddGoal}
        />
      </View>
      <FlatList
          style={styles.listEntier}
          data={goals}
          renderItem={({ item, index }) => (
              <View style={styles.row}>
                <Text style={styles.list}>{item}</Text>
                <Button style={styles.delete.backgroundColor}
                    title="X"
                    onPress={() => deleteGoal(index)}
                />
              </View>
          )}
          keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}
