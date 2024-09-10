import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { markAsVisited, unmarkAsVisited } from "../../../store/placesSlice"; // Adjust path as needed
import PlaceItem from "./PlaceItem";
import { RootState } from "../../../store/store"; // Adjust the path to your store

interface Place {
  id: number;
  name: string;
  image: string;
  description: string;
  visited: boolean;
}

const RandomPlaceSuggestion: React.FC = () => {
  // Typing the selector for accessing the places from Redux store
  const places = useSelector((state: RootState) => state.places.places);
  const dispatch = useDispatch();

  const [randomPlaceId, setRandomPlaceId] = useState<number | null>(null);

  // Function to get a random place
  const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    const randomPlace = places[randomIndex];
    setRandomPlaceId(randomPlace.id);
  };

  // Function to toggle visited status
  const toggleVisitedStatus = (id: number, visited: boolean) => {
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markAsVisited(id));
    }
  };

  // Find the selected random place from the Redux store
  const randomPlace = randomPlaceId
    ? places.find((place: Place) => place.id === randomPlaceId)
    : null;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Historical Places</Text>
      <TouchableOpacity style={styles.button} onPress={getRandomPlace}>
        <Text style={styles.buttonText}>Suggest Random Place</Text>
      </TouchableOpacity>
      {randomPlace && (
        <PlaceItem
          place={randomPlace}
          toggleVisitedStatus={toggleVisitedStatus}
        />
      )}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#fff"
  },
  button: {
    backgroundColor: "#3fabaf",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default RandomPlaceSuggestion;
