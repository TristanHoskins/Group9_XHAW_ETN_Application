import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { RootStackParamList } from './RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type gardenScreenProp = StackNavigationProp< RootStackParamList,'garden'>;

export default function gardenScreen() {
  const navigation = useNavigation<gardenScreenProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">

        {/* Header Section */}
        <View style={styles.header}>
        
          <Image
            source={require('./img/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>EMPOWERING</Text>
          <Text style={styles.subHeaderText}>THE NATION</Text>
        <View style={styles.backB}>
      <TouchableOpacity onPress={() => navigation.navigate('week')}>
        <Image source={require('./img/backB.png')} style={styles.back}/>
      </TouchableOpacity>
      </View>
      </View>

        {/* Content Section */}
        <View style={styles.content}>
          <View style={styles.blueSection}>
            <Text style={styles.blueSectionText}>6 MONTH COURSE</Text>
          </View>
          <View style={styles.blueSection}>
            <Text style={styles.blueSectionText}>Garden Maintenance</Text>
          </View>
          <View style={styles.grayLineThin} />
          <View style={styles.grayLine}>
            <Text style={styles.grayLineText}>
            Garden maintenance is essential for preserving the health and beauty of outdoor
                    spaces, whether in residential homes or larger estates. Proper care ensures the longevity of plants
                    and reduces the need for costly replacements. Additionally, maintaining gardens can enhance property
                    value and promote environmental sustainability through organic practices.
            </Text>
          </View>
          <View style={styles.grayLine} />
          <Image source={require('./img/gardenh.png')} style={styles.heroShot} />

          {/* Content Section */}
          <View style={styles.courseContentSection}>
            <Text style={styles.heading}>CONTENT</Text>
            <Text style={styles.courseFees}>
              <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Fees:</Text> R750{'\n'}
              <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Purpose:</Text>  To provide basic knowledge of watering, pruning, and planting in a domestic garden.
            </Text>
            <View style={styles.contentList}>
              <Text style={styles.listItem}>• Water restrictions and the watering requirements of indigenous and exotic plants</Text>
              <Text style={styles.listItem}>• Pruning and propagation of plants</Text>
              <Text style={styles.listItem}>• Planting techniques for different plant types</Text>
            </View>
          </View>

          {/* Opportunities Section */}
          <View style={styles.courseOpportunitiesSection}>
            <Text style={styles.heading}>OPPORTUNITIES</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Successfully completing the course qualifies you to be a:</Text>
            <View style={styles.contentList}>
              <Text style={styles.listItem}>• Farmer</Text>
              <Text style={styles.listItem}>• Florist</Text>
              <Text style={styles.listItem}>• Nursery manager</Text>
            </View>
          </View>

          {/* Testimonials */}
          <View style={styles.testimonials}>
            <View style={styles.testimonial}>
              <Image
                source={require('./img/garden1.jpg')}
                style={styles.testimonialImg}
              />
              <Text style={styles.testimonialName}>Mpho Zulu</Text>
              <Text style={styles.testimonialDescription}>
              Pretoria - Qualifications: Certificate in Horticulture, Certificate in Garden Maintenance. -
                        Experience: 12 years of experience working as a gardener and training others in lawn care, plant
                        maintenance, and pest control.
              </Text>
            </View>
            <View style={styles.testimonial}>
              <Image
                source={require('./img/garden2.jpg')}
                style={styles.testimonialImg}
              />
              <Text style={styles.testimonialName}>Peter Griffan</Text>
              <Text style={styles.testimonialDescription}>
              Sandton - Qualifications: National Diploma in Garden Design, Gardening Certification. -
                        Experience: 10 years of experience working with private estates and conducting garden
                        maintenance training
              </Text>
            </View>
            <View style={styles.testimonial}>
              <Image
                source={require('./img/garden3.png')}
                style={styles.testimonialImg}
              />
              <Text style={styles.testimonialName}>Lebohang Malema</Text>
              <Text style={styles.testimonialDescription}>
              Johannesburg - Qualifications: Certificate in Landscape and Garden Management, Certificate in
                        Organic Gardening. Experience: 9 years of experience in garden upkeep, organic farming, and
                        training domestic gardeners
              </Text>
            </View>
          </View>

          {/* Footer Icons */}
          <View style={styles.footerIcons}>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}> 
          <Image source={require('./img/HomeIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Home</Text>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('location')}>
          <Image source={require('./img/LocationIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Locations</Text>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('week')}>
          <Image source={require('./img/CourseIcon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Courses</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('fees')}> 
          <Image source={require('./img/FeesIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Fees</Text>
        </View>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('contact')}> 
          <Image source={require('./img/ContactIcon.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.iconLabel}>Contact</Text>
        </View>
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backB: { 
    marginTop: -70,
    marginLeft: 350,
   },
 
   back: {
     width: 70,
     height: 60,
   },
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
    color:'purple'
  },
  content: {
    paddingHorizontal: 10,
    paddingRight: 20,
  },
  blueSection: {
    height: 30,
    backgroundColor: '#FFC107',
    marginVertical: 10,
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    borderRadius: 10,

  },
  blueSectionText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  grayLine: {
    height: 150,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  grayLineText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    gap: 0,
   
  },
  grayLineThin: {
    height: 3,
    backgroundColor: 'black',
    marginVertical: 5,
    width: 400,
    alignItems: 'center'
  },
  
    courseContentSection: {
      paddingVertical: 20,
      paddingHorizontal: 10,
      marginTop: 20, // Converted to a number from '100px'
      padding: 40,    // Same as in the CSS
        backgroundColor: '#f9f9f9', // Same color
        borderRadius: 10,  // Same border-radius value
        shadowColor: '#000', // box-shadow requires breakdown in React Native
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10, 
        elevation: 5, // For Android shadow
        marginRight: 10, // Margin-right does not exist in React Native. Consider using alignSelf or other layout strategies
        marginLeft: 10,
      
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      backgroundColor: '#FFC107'
    },
    courseFees: {
      fontSize: 20,
      marginBottom: 10,
      lineHeight: 24,
    },
    contentList: {
      marginVertical: 10,
    },
    listItem: {
      fontSize: 20,
      marginVertical: 5,
      textAlign: 'left',
      flexDirection: 'row', // Makes the list item act like a row
  alignItems: 'flex-start',
  paddingLeft: 20, // Adds padding to the text after the bullet
  lineHeight: 24, 
    },

    courseOpportunitiesSection: {
      paddingVertical: 20,
      paddingHorizontal: 10,
      marginTop: 20, // Converted to a number from '100px'
      padding: 40,    // Same as in the CSS
        backgroundColor: '#f9f9f9', // Same color
        borderRadius: 10,  // Same border-radius value
        shadowColor: '#000', // box-shadow requires breakdown in React Native
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10, 
        elevation: 5, // For Android shadow
        marginRight: 10, // Margin-right does not exist in React Native. Consider using alignSelf or other layout strategies
        marginLeft: 10,
      
    },
  
  blueDots: {
    height: 30,
    backgroundColor: '#FFC107',
    marginVertical: 10,
    
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
  

  heroShot: {
    height: 225,
    width:390,
    marginRight: 20,
    marginTop: -150,
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
    marginBottom: 5,
  },
  iconLabel: {
    fontSize: 12,
    color: '#7d7d7d',
  },
});


