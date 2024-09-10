/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlacesList from './screens/home/components/PlacesList'; // adjust the import path as necessary
import PlaceDetails from './screens//home/components/PlaceDetails'; // adjust the import path as necessary
import { TouchableOpacity, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


const Stack = createNativeStackNavigator();

const CustomBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      
      <Text style={{ paddingLeft: 20, fontSize: 18 ,color:"#fff"}}><FontAwesomeIcon
              icon={faChevronLeft}
              color={"#fff"}
              style={{ paddingRight: 5 }}
            />Back</Text>
    </TouchableOpacity>
  );
};

function App(): React.JSX.Element {
  //const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>

    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Stack.Navigator initialRouteName="PlacesList" 
        screenOptions={{
          headerStyle: { backgroundColor: '#000' }, // Header background color
          headerTintColor: '#fff', // Header text color

        }}
      >
        <Stack.Screen
          name="PlacesList"
          component={PlacesList}
          options={{ title: 'Places List',headerTitleAlign: 'center', }}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{
            title: 'Place Details',
            headerTitleAlign: 'center',
            headerLeft: () => <CustomBackButton />, // Custom back button
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
