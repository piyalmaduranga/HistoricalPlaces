import React from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { markAsVisited, unmarkAsVisited } from '../../../store/placesSlice'; // Adjust path as needed
import RandomPlaceSuggestion from './RandomPlaceSuggestion';
import PlaceItem from './PlaceItem';
import { RootState } from '../../../store/store'; // Adjust path as needed

const PlacesList: React.FC = () => {
  const dispatch = useDispatch();
  
  // Using RootState to infer the correct type from Redux store
  const places = useSelector((state: RootState) => state.places.places);

  const toggleVisitedStatus = (id: number, visited: boolean) => {
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markAsVisited(id));
    }
  };

  const renderItem = ({ item }: { item: any }) => {
    if (item.isRandomSuggestion) {
      return <RandomPlaceSuggestion />;
    }

    return (
      <PlaceItem
        place={item}
        toggleVisitedStatus={toggleVisitedStatus}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <RandomPlaceSuggestion />

      <Text style={styles.heading}>All Historical Places</Text>

      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No places available.</Text>}
      />
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

export default PlacesList;
