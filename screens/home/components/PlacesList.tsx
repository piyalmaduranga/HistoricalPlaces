import React from 'react';
import { Text, FlatList } from 'react-native';
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
    <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No places available.</Text>}
    />
  );
};


export default PlacesList;
