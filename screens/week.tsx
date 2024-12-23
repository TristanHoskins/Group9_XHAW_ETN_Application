import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Correct import
import { RootStackParamList } from './RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';

type weekScreenProp = StackNavigationProp< RootStackParamList,'Week'>;

export default function weekScreen() {
  const navigation = useNavigation<weekScreenProp>();
  const [selectedCourse, setSelectedCourse] = useState<string>("6Week"); // Explicit type

  return (
    <HelmetProvider>
    <View style={styles.appContainer}>
      {/* Dropdown/Picker to filter courses */}
      <Helmet>
        <title>Empowering the Nation - more page</title>
        <meta name="description" content="Empowering the Nation offers three 6 week courses and four 6 month courses. Week courses are each R750 which includes child minding, gardening and cooking. month courses are R1500 which include first aid, land scaping, sewing and life skills" />
        <meta name="keywords" content="empowerment, land scaping, sewing, first aid, gardening, life skills,child minding,cooking,education"/>
        </Helmet>

      <Text style={styles.courseDuration}>
        {selectedCourse === "6Week" ? "6 Week Course" : "6 Week Course"}
      </Text>
      
      <Picker
      selectedValue={selectedCourse}
      onValueChange={(itemValue: string) => {
        setSelectedCourse(itemValue); // Update selectedCourse state

        // Navigate based on the selected value
        if (itemValue === '6Week') {
          navigation.navigate('Week'); // Navigate to the 'week' screen
        } else if (itemValue === '6Month') {
          navigation.navigate('Month'); // Navigate to the 'month' screen
        }
      }}
      style={styles.picker}
    >
      <Picker.Item label="6 Week Courses" value="6Week" />
      <Picker.Item label="6 Month Courses" value="6Month" />
    </Picker>

        <ScrollView>
          <View style={styles.container}>
            <CourseBox1
              imageSrc={require('./img/childmindingh.png')}
              title="Child Minding"
              description="This course teaches childcare providers how to manage children's physical, emotional, and educational needs. Proper training helps to create safe, nurturing environments where children can thrive."
              price="R 750" 
              navigation={navigation}
            
            />

            <CourseBox2
              imageSrc={require('./img/cookingh.png')}
              title="Cooking"
              description="Cooking is a vital life skill that ensures self-sufficiency, nutrition, and cost-effective meal preparation. Knowledge of cooking techniques allows individuals to make healthier food choices and reduce reliance on processed or fast food."
              price="R 750"
              navigation={navigation}
            />
            <CourseBox3
              imageSrc={require('./img/gardenh.png')}
              title="Garden Maintenance"
              description="Garden maintenance is essential for preserving the health and beauty of outdoor spaces, whether in residential homes or larger estates. "
              price="R 750"
              navigation={navigation}
            />
            
          </View>
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
    </HelmetProvider>
    );
  }
  
  // Course box component
  const CourseBox1 = ({ imageSrc, title, description, price, navigation }: any) => (
    <View style={styles.courseBox}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Child')}>
        <Text style={styles.price}>{price} </Text>
      </TouchableOpacity>
    </View>
  );
  
  const CourseBox2 = ({ imageSrc, title, description, price, navigation }: any) => (
    <View style={styles.courseBox}>
    <Image source={imageSrc} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text>{description}</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Cook')}>
      <Text style={styles.price}>{price} </Text>
    </TouchableOpacity>
  </View>
  );
  const CourseBox3 = ({ imageSrc, title, description, price, navigation }: any) => (
    <View style={styles.courseBox}>
    <Image source={imageSrc} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text>{description}</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Garden')}>
      <Text style={styles.price}>{price} </Text>
    </TouchableOpacity>
  </View>
 
  );
  
  // Styles
  const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
    },

   

    courseDuration: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10,
      backgroundColor: '#FFC107',
      marginTop:80,
      borderRadius: 80,
      width: 340,
      alignItems: 'center',
      marginLeft: 30,
    },
    container: {
      padding: 10,
      paddingBottom: 70, // Adjust for footer space
      marginTop: 40, 
    },
    courseBox: {
      marginBottom: 20,
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    image: {
      width: '100%',
      height: 150,
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },

    price: {
      height: 30,
      backgroundColor: '#FFC107',
      marginVertical: 10,
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 10,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    // Footer navigation styles
    footerIcons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      paddingVertical: 5,
      position: 'absolute',
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
    picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  });
