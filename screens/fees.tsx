import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { RootStackParamList } from './RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert, Linking } from 'react-native';


type feesScreenProp = StackNavigationProp< RootStackParamList,'Fees'>;

export default function feesScreen() {

  const navigation = useNavigation<feesScreenProp>();

  // checkbox selections
  const [selectedCourses, setSelectedCourses] = useState({
    sewing: false,
    firstAid: false,
    lifeSkills: false,
    landscaping: false,
    cooking: false,
    childMinding: false,
    gardenMaintenance: false,
  });

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const [formValues, setFormValues] = useState({
    name: '',
    message: '',
    email: '',
    phoneNumber: '',
  });

  const prices = {
    sewing: 1500,
    firstAid: 1500,
    lifeSkills: 1500,
    landscaping: 1500,
    cooking: 750,
    childMinding: 750,
    gardenMaintenance: 750,
  };
  
  // Calculation of the total cost with discount and VAT
  const calculateTotal = () => {
    let sum = 0;
    let selectedCourseCount = 0;
  
    // Calculate the sum of selected courses' prices
    for (const course of Object.keys(selectedCourses) as (keyof typeof prices)[]) {
      if (selectedCourses[course]) {
        sum += prices[course];
        selectedCourseCount++; // Count the selected course
      }
    }
  
    // Apply discount based on the number of selected courses
    let discountRate = 0;
    if (selectedCourseCount === 2) {
      discountRate = 0.05; // 5% discount for two courses
    } else if (selectedCourseCount === 3) {
      discountRate = 0.10; // 10% discount for three courses
    } else if (selectedCourseCount >= 4) {
      discountRate = 0.15; // 15% discount for four or more courses
    }
  
    // Calculate the total price after discount
    const discountedTotal = sum - sum * discountRate;
  
    // Add 15% VAT to the discounted total
    const vatRate = 0.15; // 15% VAT
    const totalWithVAT = discountedTotal + discountedTotal * vatRate;
  
    // Update state with the new total and discount
    setTotal(totalWithVAT);
    setDiscount(discountRate * 100); // Convert discount rate to percentage
  };
  

  // Form validation and submission
const handleSubmit = () => {
  // Check for empty fields
  if (!formValues.name.trim() || !formValues.message.trim() || !formValues.email.trim() || !formValues.phoneNumber.trim()) {
    Alert.alert('ETN Team', 'Please kindly fill in all the fields before submitting.');
    return;
  }

  // Validate email format (basic validation)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formValues.email)) {
    Alert.alert('Error', 'Please enter a valid email address.');
    return;
  }

  // Construct the email body
  const emailSubject = 'ETN Customer Inquiry';
  const emailBody = `
    Name: ${formValues.name}
    Message: ${formValues.message}
    Email: ${formValues.email}
    Phone Number: ${formValues.phoneNumber}
  `;

  const emailUrl = `mailto:empoweringthenation@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Open the default email client
  Linking.openURL(emailUrl)
    .then(() => {
      Alert.alert('Success!', 'Your message has been sent, We will be in touch shortly! - ETN Team');

      // Reset form fields and checkboxes after successful submission
      setFormValues({
        name: '',
        message: '',
        email: '',
        phoneNumber: '',
      });

      setSelectedCourses({
        sewing: false,
        firstAid: false,
        lifeSkills: false,
        landscaping: false,
        cooking: false,
        childMinding: false,
        gardenMaintenance: false,
      });

      setTotal(0);
      setDiscount(0);
    })
    .catch(() => {
      Alert.alert('Error', 'Failed to send email. Please try again.');
    });
};


  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image source={require('./img/FeeBanner.png')} style={styles.banner} alt='Fee Banner' />
        </View>
        <Text style={styles.GetQuote}>GET YOUR QUOTE TODAY</Text>
        {/* Quote Form */}
        <View style={styles.quoteContainer}>
          {/* Form Section */}
          <View style={styles.quoteForm}>
            {/* Course Categories */}
            <View style={styles.courseCategories}>
              <Text style={styles.categoryText}>6-Week Courses | 6-Month Courses</Text>
            </View>
            <View style={styles.courseCategories}>
              <Text style={styles.categoryText}>R 750 p/course | R 1500 p/course </Text>
            </View>
            {/* Course List with Checkboxes */}
            <View style={styles.coursesList}>
              <View style={styles.courseColumn}>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedCourses.sewing ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSelectedCourses((prevState) => ({
                        ...prevState,
                        sewing: !prevState.sewing,
                      }))
                    }
                  />
                  <Text style={styles.courseItem}>Sewing Course</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedCourses.firstAid ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSelectedCourses((prevState) => ({
                        ...prevState,
                        firstAid: !prevState.firstAid,
                      }))
                    }
                  />
                  <Text style={styles.courseItem}>First Aid Course</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedCourses.lifeSkills ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSelectedCourses((prevState) => ({
                        ...prevState,
                        lifeSkills: !prevState.lifeSkills,
                      }))
                    }
                  />
                  <Text style={styles.courseItem}>Life Skills Course</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedCourses.landscaping ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSelectedCourses((prevState) => ({
                        ...prevState,
                        landscaping: !prevState.landscaping,
                      }))
                    }
                  />
                  <Text style={styles.courseItem}>Landscaping Course</Text>
                </View>
              </View>
              <View style={styles.courseColumn}>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedCourses.cooking ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSelectedCourses((prevState) => ({
                        ...prevState,
                        cooking: !prevState.cooking,
                      }))
                    }
                  />
                  <Text style={styles.courseItem}>Cooking Course</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedCourses.childMinding ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSelectedCourses((prevState) => ({
                        ...prevState,
                        childMinding: !prevState.childMinding,
                      }))
                    }
                  />
                  <Text style={styles.courseItem}>Child-minding Course</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={selectedCourses.gardenMaintenance ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSelectedCourses((prevState) => ({
                        ...prevState,
                        gardenMaintenance: !prevState.gardenMaintenance,
                      }))
                    }
                  />
                  <Text style={styles.courseItem}>Garden Maintenance Course</Text>
                </View>
              </View>
            </View>
            {/* Action Row */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.calculateButton} onPress={calculateTotal}>
                <Text style={styles.calculateButtonText}>Calculate</Text>
              </TouchableOpacity>
              <View style={styles.totals}>
                <Text style={styles.totalText}>
                  DISCOUNT: <Text style={styles.discountText}>{discount}%</Text>
                </Text>
                <Text style={styles.totalText}>
                  TOTAL: <Text style={styles.discountText}>R{total.toFixed(2)}</Text>
                </Text>
              </View>
            </View>
            <View style={styles.vatAdd}>
              <Text style={styles.vatText}>Automatic addition of 15% VAT </Text>
            </View>
          </View>
        </View>
        <Text style={styles.contact}>GET IN TOUCH WITH US</Text>
        {/* Contact Form */}
        <View style={styles.contactForm}>
          <View style={styles.inputField}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={formValues.name}
              onChangeText={(text) => setFormValues({ ...formValues, name: text })}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.label}>Message:</Text>
            <TextInput
              style={styles.input}
              placeholder="Message"
              value={formValues.message}
              onChangeText={(text) => setFormValues({ ...formValues, message: text })}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={formValues.email}
              onChangeText={(text) => setFormValues({ ...formValues, email: text })}
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={formValues.phoneNumber}
              onChangeText={(text) => setFormValues({ ...formValues, phoneNumber: text })}
            />
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>CONTACT US</Text>
          <Text style={styles.footerText}>Phone: +27 11 618 0547</Text>
          <Text style={styles.footerText}>Email: empoweringthenation@gmail.com</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  banner: {
    width: 410,
    height: 200,
    paddingRight: 100,
  },
  quoteContainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#f0f0f0',
  },
  quoteForm: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffcc00',
    borderRadius: 10,
  },
  courseCategories: {
    marginBottom: 20,
    paddingLeft: 30,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  coursesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17, // Adjust spacing as needed
  },
  courseColumn: {
    flex: 1,
    paddingRight: 10, // Adds some space between the columns
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Space between each course
  },
  courseItem: {
    marginLeft: 10, // Space between the checkbox and text
    fontSize: 16,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  calculateButton: {
    backgroundColor: '#e100ff',
    padding: 15,
    borderRadius: 10,
  },
  calculateButtonText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 20,
  },
  totals: {
    backgroundColor: '#d146fc',
    padding: 10,
    borderRadius: 10,
  },
  totalText: {
    color: '#fff',
    fontSize: 18,
  },
  discountText: {
    fontWeight: 'bold',
  },
  vatAdd: {
    alignContent: 'center',
    marginTop: 2,
  },
  vatText: {
    marginTop: 5,
    marginLeft: 78,
  },
  contactForm: {
    padding: 20,
    backgroundColor: '#fff',
  },
  inputField: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  footer: {
    padding: 20,
    backgroundColor: '#9c88be',
    alignItems: 'center',
    marginBottom: 100,
  },
  footerText: {
    color: '#fff',
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
  GetQuote: {
    fontSize: 26,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    backgroundColor: '#E736F7',
    paddingLeft: 50,
    paddingRight: 40,
    marginRight: 100,
    width: 400,
  },

  contact: {
    fontSize: 26,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
    marginLeft: 5,
    backgroundColor: '#E736F7',
    paddingLeft: 50,
    paddingRight: 40,
    marginRight: 100,
    width: 400,
  },
  button: {
    backgroundColor: '#E736F7',
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 120,
  }, });
