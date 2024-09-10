import React from "react";
import { View,SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation ,NavigationProp} from "@react-navigation/native";
import { faMapMarkerAlt, faMapMarker, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { RootStackParamList } from '../../../types/navigationTypes';

interface Place {
  id: number;
  name: string;
  image: string;
  description: string;
  visited: boolean;
}

interface PlaceItemProps {
  place: Place;
  isDetail?: boolean;
  toggleVisitedStatus: (id: number, visited: boolean) => void;
}


const PlaceItem: React.FC<PlaceItemProps> = ({ place, isDetail, toggleVisitedStatus }) => {
const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{ uri: place.image }} style={styles.image} />
        <Text style={styles.title}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>
        <Text style={{fontSize: 12,textAlign:'center',marginBottom:10,
                        color: place.visited ? "green" : "red" }}>
          {place.visited ? "Visited" : "Not Visited"}
        </Text>

        <View style={[styles.btnGroup, { justifyContent: isDetail ? "center" : "space-between" }]}>
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

          {!isDetail && (
            <TouchableOpacity
              onPress={() => navigation.navigate("PlaceDetails", { id: place.id })}
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                View Details
                <FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: 5 }}  color={"#fff"}/>
              </Text>
             </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
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
    color:'#000',
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
});

export default PlaceItem;
