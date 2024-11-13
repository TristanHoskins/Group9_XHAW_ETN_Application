import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import { RootStackParamList } from './RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Helmet } from 'react-helmet-async';

type LocationScreenProp = StackNavigationProp< RootStackParamList,'Location'>;


type Location = {

  name: string;

  address: string;

  coords: {

    latitude: number;

    longitude: number;

  };

  image: any;

};

export default function LocationScreen() {
  // State to manage checkbox selections
const navigation = useNavigation<LocationScreenProp>();
const locations: Location[] = [

    {

      name: 'Sandton',

      address: 'Waterstone Drive, Benmore Road, Sandton, 2196',

      coords: { latitude: -26.0935742, longitude: 28.0477458 },

      image: require('./img/pin.png'),

    },

    {

      name: 'Troye St',

      address: 'Kerk Street, Troye St., Johannesburg, 2000',

      coords: { latitude: -26.2016412, longitude: 28.0487607 },

      image: require('./img/test1.png'),

    },

    {

      name: 'Parktown',

      address: '5 Ubla Ln, Parktown, Johannesburg, 2000',

      coords: { latitude: -26.174943942634112, longitude: 28.049323034335675 },

      image: require('./img/2.png'),

    },

  ];





  


  return (
    <View style={styles.container}>
      <Helmet>
        <title>Empowering the Nation - location</title>
        <meta name="description" content="Empowering the Nation main three locations are in Sandron, Troye st and Parktown" />
        <meta name="keywords" content="empowerment, location, sandton, johannesburg, parktown, troye street, education"/>
        </Helmet>
      <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo Image */}
        <Image
          source={require('./img/logo.png')}
          style={styles.logo} />
        <Text style={styles.headerText}>EMPOWERING</Text>
        <Text style={styles.subHeaderText}>THE NATION</Text>
      </View>

      {locations.map((location, index) => (

        <View key={index} style={styles.locationContainer}>

          <View style={styles.imageContainer}>

            <Image source={location.image} style={styles.image} />

            <View>

              <Text style={styles.locationTitle}>{location.name}</Text>

              <Text style={styles.locationAddress}>{location.address}</Text>

            </View>

          </View>

          <MapView

            style={styles.map}

            initialRegion={{

              latitude: location.coords.latitude,

              longitude: location.coords.longitude,

              latitudeDelta: 0.01,

              longitudeDelta: 0.01,

            }}

          >

            <Marker coordinate={location.coords} />

          </MapView>

        </View>

      ))}
       </ScrollView>
      {/* Footer Section with Icon Images */}
      <View style={styles.footerIcons}>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
          <Image source={require('./img/HomeIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Home</Text>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
          <Image source={require('./img/LocationIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Locations</Text>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Week')}>
          <Image source={require('./img/CourseIcon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Courses</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Fees')}> 
          <Image source={require('./img/FeesIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Fees</Text>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}> 
          <Image source={require('./img/ContactIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Contact</Text>
        </View>
      </View>
    </View>
    
  );
};




const styles = StyleSheet.create({

  header: {
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginTop: 40,
    marginRight: 50,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: -80,
    color: '#FFC107'

  },
  subHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 200,
    color: 'purple'
  },
  textContainer: {

    flex: 2,

    alignItems: 'center',

  },

  mainText: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#000',

    backgroundColor: '#FFFF00',

    paddingHorizontal: 10,

  },

  subText: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#000',

    backgroundColor: '#FFFF00',

    paddingHorizontal: 10,

  },

  container: {

    flex: 1,

    padding: 10,

    backgroundColor: '#fff',

  },

  locationContainer: {

    marginBottom: 30,

    backgroundColor: '#f9f9f9',

    padding: 10,

    borderRadius: 10,

    elevation: 3,

  },

  imageContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  image: {

    width: 90,

    height: 100,

    marginRight: 10,

  },

  locationTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  locationAddress: {

    fontSize: 14,

    color: '#555',

  },

  map: {

    width: '100%',

    height: 300,

  },
  testimonials: {
    marginVertical: 20, // Space above and below the testimonials section
    paddingHorizontal: 10, // Padding to align content within the section
  },
  testimonial: {
    marginBottom: 50, // Space between each testimonial
    alignItems: 'center', // Center align the content
    backgroundColor: '#f9f9f9', // Light background for each testimonial
    padding: 20, // Padding inside each testimonial
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  testimonialImg: {
    width: 80, // Image size
    height: 80,
    borderRadius: 40, // Make it circular
    marginBottom: 10, // Space below the image
  },
  testimonialName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, // Space below the name
  },
  testimonialDescription: {
    fontSize: 14,
    textAlign: 'center', // Center align text
    lineHeight: 20, // Line height for better readability
  },

  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconLabel: {
    fontSize: 12,
    color: '#7d7d7d',
  },

});



