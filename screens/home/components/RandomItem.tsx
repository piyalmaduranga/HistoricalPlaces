import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define TypeScript interface for the place prop
interface Place {
  name: string;
  image: string;
  description: string;
}

// Define TypeScript props for the RandomItem component
interface RandomItemProps {
  place: Place;
}

// Convert component to React Native with TypeScript
const RandomItem: React.FC<RandomItemProps> = ({ place }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: place.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{place.name}</Text>
          <Text style={styles.description}>{place.description}</Text>
        </View>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, // For shadow effect on Android
    shadowColor: '#000', // For shadow effect on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  }
});

export default RandomItem;
