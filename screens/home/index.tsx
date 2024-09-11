import React from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';// Adjust path as needed
import RandomPlaceSuggestion from '../home/components/RandomPlaceSuggestion';
import PlacesList from '../home/components/PlacesList';

const HomeScreen: React.FC = () => {
  
  return (
    <ScrollView style={styles.container}>
      <RandomPlaceSuggestion />
      <Text style={styles.heading}>All Historical Places</Text>
      <PlacesList/>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"#fff",
    marginBottom: 16,
  },
});

export default HomeScreen;
