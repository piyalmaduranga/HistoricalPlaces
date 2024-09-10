// screens/PlaceDetails.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootState } from '../../../store/store'; // Adjust the import path
import { markAsVisited, unmarkAsVisited } from '../../../store/placesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt, faMapMarker } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome';

interface RouteParams {
  id: string;
}

const PlaceDetails = () => {
  const route = useRoute();
  const dispatch = useDispatch();

  const { id } = route.params as RouteParams;
  const place = useSelector((state: RootState) =>
    state.places.places.find((place) => place.id === parseInt(id))
  );

  if (!place) {
    return (
      <View style={styles.cardContainer}>
        <Text>Place not found</Text>
      </View>
    );
  }

  const toggleVisitedStatus = (id: number, visited: boolean) => {
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markAsVisited(id));
    }
  };

  return (
    <View style={styles.cardContainer}>
    <Text style={styles.heading}>Historical Places</Text>
      <View style={styles.card}>
        <Image source={{ uri: place.image }} style={styles.image} />
        <Text style={styles.title}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>
        <Text style={{fontSize: 12,textAlign:'center',marginBottom:10,
                        color: place.visited ? "green" : "red" }}>
          {place.visited ? "Visited" : "Not Visited"}
        </Text>

        <View style={[styles.btnGroup, { justifyContent:  "center"  }]}>
          <TouchableOpacity
            onPress={() => toggleVisitedStatus(place.id, place.visited)}
            style={styles.button}
          >
            <FontAwesomeIcon
              icon={place.visited ? faMapMarkerAlt : faMapMarker}
              color={"#fff"}
              style={{ paddingRight: 5 }}
            />
            <Text style={styles.buttonText}>
              {place.visited ? "Unmark as Visited" : "Mark as Visited"}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 15,
      padding: 10,
      height:"100%",
      backgroundColor:"#000"
    },
    card: {
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      backgroundColor: "#fff",
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign:'center',
      color:"#000",
      marginVertical: 10,
    },
    description: {
      fontSize: 14,
      textAlign:'center',
      color:"#000",
      marginBottom: 10,
    },
    btnGroup: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      padding: 10,
      backgroundColor: "#3fabaf",
      borderRadius: 5,
      alignItems: "center",
      color:'#fff',
      flexDirection: "row",
    },
    buttonText: {
      color: 'white', // Text color
      fontSize: 16,
      textAlign: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color:"#fff",
        marginBottom: 16,
      },
  });

export default PlaceDetails;
