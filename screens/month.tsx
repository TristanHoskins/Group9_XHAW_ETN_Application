import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Correct import
import { RootStackParamList } from './RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type monthScreenProp = StackNavigationProp< RootStackParamList,'Month'>;

export default function monthScreen() {
  const navigation = useNavigation<monthScreenProp>();
  const [selectedCourse, setSelectedCourse] = useState<string>("6Month"); // Explicit type

  return (
    <View style={styles.appContainer}>
      {/* Dropdown/Picker to filter courses */}
      

      <Text style={styles.courseDuration}>
        {selectedCourse === "6Month" ? "6 Month Course" : "6 Month Course"}
      </Text>
      
      <Picker
      selectedValue={selectedCourse}
      onValueChange={(itemValue: string) => {
        setSelectedCourse(itemValue); // Update selectedCourse state

        // Navigate based on the selected value
        if (itemValue === '6Month') {
          navigation.navigate('Month'); // Navigate to the 'week' screen
        } else if (itemValue === '6Week') {
          navigation.navigate('Week'); // Navigate to the 'month' screen
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
                imageSrc={require('./img/FirstAid.png')}
                title="First Aid"
                description="We’re excited to offer a special discount to help you maximize your learning while saving! The more courses you enroll in, the bigger the discount: Sign up for two courses and enjoy a 5% discount. Enroll in three courses and save with a discount of 10%. Register for four or more courses, and you'll receive a generous 15% discount. It’s our way of encouraging you to take full advantage of the opportunities to expand your skills and knowledge, while making it more affordable to invest in your future."
                price="R 1500"
                navigation={navigation}
              />
              <CourseBox2
                imageSrc={require('./img/sewh.png')}
                title="Sewing"
                description="Taking our 6-week course is the perfect way to capitalize on an opportunity where you can quickly, yet effectively gain practical skills and knowledge that will benefit you both personally and professionally. The short duration of the course allows you to stay focused and engaged, while still offering the flexibility to manage your other responsibilities."
                price="R 1500"
                navigation={navigation}
              />
               <CourseBox3
                imageSrc={require('./img/landh.jpg')}
                title="Landscaping"
                description="Taking our 6-week course is the perfect way to capitalize on an opportunity where you can quickly, yet effectively gain practical skills and knowledge that will benefit you both personally and professionally. The short duration of the course allows you to stay focused and engaged, while still offering the flexibility to manage your other responsibilities"
                price="R 1500"
                navigation={navigation}
              />
              <CourseBox4
                imageSrc={require('./img/lifeh.png')}
                title="Life Skills"
                description="Our 6-month course is designed to offer you a more thorough and immersive learning experience, providing the time needed to truly master new skills and concepts. Throughout this course, you'll engage in hands-on learning that allows you to apply what you’ve learned in real-world contexts. "
                price="R 1500"
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
  );
};



// Course box component
const CourseBox1 = ({ imageSrc, title, description, price, navigation }: any) => (
  <View style={styles.courseBox}>
      <Image source={imageSrc} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('FirstAid')}>
        <Text style={styles.price}>{price} </Text>
      </TouchableOpacity>
    </View>
);
const CourseBox2 = ({ imageSrc, title, description, price, navigation }: any) => (
  <View style={styles.courseBox}>
  <Image source={imageSrc} style={styles.image} />
  <Text style={styles.title}>{title}</Text>
  <Text>{description}</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Sew')}>
    <Text style={styles.price}>{price} </Text>
  </TouchableOpacity>
</View>
);
const CourseBox3 = ({ imageSrc, title, description, price, navigation }: any) => (
  <View style={styles.courseBox}>
  <Image source={imageSrc} style={styles.image} />
  <Text style={styles.title}>{title}</Text>
  <Text>{description}</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Land')}>
    <Text style={styles.price}>{price} </Text>
  </TouchableOpacity>
</View>
);
const CourseBox4 = ({ imageSrc, title, description, price, navigation }: any) => (
  <View style={styles.courseBox}>
  <Image source={imageSrc} style={styles.image} />
  <Text style={styles.title}>{title}</Text>
  <Text>{description}</Text>
  <TouchableOpacity onPress={() => navigation.navigate('LifeS')}>
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
