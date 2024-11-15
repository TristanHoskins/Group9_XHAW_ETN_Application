import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { Helmet } from 'react-helmet-async';

type homeScreenProp = StackNavigationProp< RootStackParamList,'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={styles.container}>
      <Helmet>
        <title>Empowering the Nation - Home</title>
        <meta name="description" content="Empowering the Nation provides training programs to increase the employability of domestic workers and gardeners." />
        <meta name="keywords" content="empowerment, training programs, skills, domestic workers, gardeners, employment, education" />
        </Helmet>
      <ScrollView style={styles.container}>
        {/* Top Image Section */}
        <View style={styles.topImageContainer}>
          <Image style={styles.TopImage} source={require('./img/GradPic.png')} />
        </View>
        {/* Logo and Empowering Text */}
        <View style={styles.empowerContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./img/logo.png')} />
          </View>
          <Text style={styles.empoweringText}>EMPOWERING</Text>
          <Text style={styles.theNationText}>THE NATION</Text>
        </View>
        {/* Opening Paragraph */}
        <Text style={styles.topParagraph}>
          Established in 2018, Empowering the Nation offers an innovative training program specializing
          particularly on enhancing the skills of domestic workers and gardeners, to increase their
          employability.
        </Text>
        <Text style={styles.topParagraph2}>
          We offer a large range of training courses, providing the community with the opportunity to choose
          between six-week short skills training programs or six-month-long learnerships.
        </Text>
        <Text style={styles.topParagraph2}>
          With a 95% success rate and recognition as the 15th most valuable skills training institution in Gauteng, we
          ensure that students who complete our programs not only gain practical, marketable skills but are also well-prepared to
          secure well-paying employment or successfully launch their own businesses.
        </Text>
        {/* Two Image Section */}
        <View style={styles.imageRow}>
          <View style={styles.imageBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Week')}>
            <Image style={styles.placeholderImage} source={require('./img/6weekhead.png')} />
            </TouchableOpacity>
            <Text style={styles.textBelow}>
              Our college is dedicated to giving you real-world, hands-on training so you may be successful in
              the job. Our carefully planned six-week courses are aimed at equipping you with useful skills in
              areas such as gardening, cooking, and childcare. Are you prepared to change the course of your future?
            </Text>
          </View>
          <View style={styles.imageBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Month')}>
            <Image style={styles.placeholderImage} source={require('./img/6monthhead.png')} />
            </TouchableOpacity>
            <Text style={styles.textBelow}>
              The six-month courses offered by our institution are structured educational programs designed to
              provide participants with in-depth knowledge and practical skills. Over six months, students engage in theoretical and
              hands-on learning, allowing them to develop expertise and become more competitive in the job
              market.
            </Text>
          </View>
        </View>
        <View style={styles.discountContainer}>
        {/* Header Image */}
        <Image source={require('./img/discounthead.png')} style={styles.picHeader} />
        
        {/* Discount Description */}
        <Text style={styles.discountText}>
          We’re excited to offer a special discount to help you maximize your learning while saving! 
          The more courses you enrol in, the bigger the discount:
        </Text>

        {/* Discount Details */}
        <View style={styles.featureList}>
          <Text style={styles.listItem}>
            Sign up for <Text style={styles.bold}>two courses </Text>and enjoy a <Text style={styles.bold}>5% discount.</Text>
          </Text>
          <Text style={styles.listItem}>
            Enrol in <Text style={styles.bold}>three courses</Text> and save with a <Text style={styles.bold}>discount of 10%.</Text>
          </Text>
          <Text style={styles.listItem}>
            Register for <Text style={styles.bold}>four or more courses,</Text> and you'll receive a generous <Text style={styles.bold}>15% discount.</Text>
          </Text>
        </View>

        {/* Final Paragraph */}
        <Text style={styles.discountText}>
          It’s our way of encouraging you to take full advantage of the opportunities to expand your skills and knowledge, 
          while making it more affordable to invest in your future. Whether you’re looking to boost your career or learn something new, 
          you can now do so with added savings.
        </Text>
      </View>

        <Text style={styles.review}>REVIEWS</Text>
         {/* Testimonial 1 */}
      <View style={styles.testimonialBox}>
      <View style={styles.testimonial}>
        <Image
          style={styles.testimonialImg}
          source={require('./img/jared_T1.png')} 
          />
        <Text style={styles.name}>Jared Williams</Text>
        <Text style={styles.testimonialText}>
          “Joining Empowering the Nations has been the best decision I made. After finishing matric I couldn’t get
          into my dream university, I wanted to give up. But when I heard about the Empowering the Nations and the
          opportunities, they provide their students, it changed everything. I felt fully equipped to take on the
          world. I am now a certified paramedic. For that, I thank ETN.”
        </Text>
      </View>
      {/* Testimonial 2 */}
      <View style={styles.testimonial}>
        <Image
          style={styles.testimonialImg}
          source={require('./img/abigail_T2.png')} 
        />
        <Text style={styles.name}>Abigail Ndlovu</Text>
        <Text style={styles.testimonialText}>
          “Empowering the Nations training school has made me believe that I am capable of achieving greatness,
          despite my age. The culture of the classes is very supportive, and the staff truly go above and beyond
          to help students succeed. Their services have helped me to open up my very small business. I can’t
          recommend the school enough.”
        </Text>
      </View>
      {/* Testimonial 3 */}
      <View style={styles.testimonial}>
        <Image
          style={styles.testimonialImg}
          source={require('./img/xander_T3.png')} 
        />
        <Text style={styles.name}>Xander van Wyk</Text>
        <Text style={styles.testimonialText}>
          “Enrolling our staff to Empowering the Nations was one of the best investments for our business. Their
          courses are tailored to real-world experiences, which has significantly increased the competence of our
          team. We have seen an increase of productivity and confidence among our employees. The practical
          approach has not only improved their professional abilities but also reinvigorated the culture of
          ongoing learning in our company.”
        </Text>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topImageContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  TopImage: {
    width: 410,
    height: 240,
    marginBottom: 15,
  },
  placeholderImage: {
    width: 180,
    height: 100,
    backgroundColor: '#ccc',
  },
  empowerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 160,
    backgroundColor: '#ccc',
    borderRadius: 30,
    marginRight: 240,
  },
  empoweringText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 155,
    marginTop: -120,
    color: '#FFC90E',
  },
  theNationText: {
    fontSize: 30,
    color: '#E736F7',
    marginLeft: 155,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  topParagraph: {
    fontSize: 16,
    padding: 15,
    textAlign: 'center',
    marginTop: -45,
  },
  topParagraph2: {
    fontSize: 16,
    padding: 16,
    textAlign: 'center',
    marginTop: -30,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  imageBox: {
    alignItems: 'center',
    width: '50%',
  },
  textBelow: {
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
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
  review: {
    fontSize: 30,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 120,
    backgroundColor: '#E736F7',
    paddingLeft: 30,
    paddingRight: 10,
    marginRight: 100,
  },
  testimonialBox: {
    marginBottom: 100,
  },
  testimonial: {
    marginBottom: 30,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignContent: 'center',
  },
  testimonialImg: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginBottom: 15,
    marginLeft: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    textAlign: 'center',
  },
  discountContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  picHeader: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  discountText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  featureList: {
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});
