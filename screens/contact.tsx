import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RootStackParamList } from './RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';


type contactScreenProp = StackNavigationProp< RootStackParamList,'Contact'>;

export default function ContactScreen() {
    
  const navigation = useNavigation<contactScreenProp>();


  return (
    <HelmetProvider>
    <SafeAreaView style={styles.container}>
      <Helmet>
        <title>Empowering the Nation - contact page</title>
        <meta name="description" content="Empowering the Nation can be contacted through phone, email as well as 3 social media platforms" />
        <meta name="keywords" content="empowerment, contact, social media, phone, email, tiktok, facebook,twitter"/>
        </Helmet>
      <ScrollView contentInsetAdjustmentBehavior="automatic">

        {/* Header Section */}
        <View style={styles.header}>
          {/* Logo Image */}
          <Image
            source={require('./img/contact.png')}
            style={styles.logo} />
          
        </View>

        {/* Contact Section */}
        <View style={styles.mainContainer}>
          <View style={styles.socialMediaInfo}>
            
            <View style={styles.contactList}>
              <Image source={require('./img/email.png')} style={styles.emailPhone}/>

              <Image source={require('./img/phone.png')} style={styles.emailPhone}/>

              <Image source={require('./img/social.png')} style={styles.emailPhone}/>
            </View>

            {/* Social Media Icons */}
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.tiktok.com/@etn_skillsdev')}>
                <FontAwesome5 name="tiktok" size={20} color="black" />
                <Text style={styles.buttonText}>Tiktok</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.facebook.com/profile.php?')}>
                <FontAwesome5 name="facebook" size={20} color="#1a73e8" />
                <Text style={styles.buttonText}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://x.com/etn_skillsdev')}>
                <FontAwesome5 name="twitter" size={20} color="lightblue" />
                <Text style={styles.buttonText}>Twitter</Text>
              </TouchableOpacity>
            </View>
            </View>
            </View>
            <View style={styles.backB}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
        <Image source={require('./img/backB.png')} style={styles.back}/>
      </TouchableOpacity>
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
    

    </SafeAreaView>
    </HelmetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-start',
    
  },
  backB: { 
    marginTop: -70,
    marginLeft: 350,
   },
   back: {
    width: 70,
    height: 60,
  },
  logo: {
    width: 500,
    height: 100,
    marginTop: 20,
    
   
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: -80,
    color: '#FFC107',
  },
  subHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 200,
    color: 'purple',
  },
  mainContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  socialMediaInfo: {
    paddingVertical: 20,
      paddingHorizontal: 10,
      marginTop: 5, // Converted to a number from '100px'
      padding: 50,    // Same as in the CSS
        backgroundColor: '#f9f9f9', // Same color
        borderRadius: 10,  // Same border-radius value
        shadowColor: '#000', // box-shadow requires breakdown in React Native
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10, 
        elevation: 5, // For Android shadow
        marginBottom: 100,
        
  },

  contactList: {
    marginBottom: 10,
    gap: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
   
  
  },

  emailPhone:{
    width: 355,
    height: 100,

  },
  socialIcons: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center'
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 160,
    height: 50,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right:0,
   
  },
  
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 0,
  },
  iconLabel: {
    fontSize: 12,
    color: '#7d7d7d',
  },
});


