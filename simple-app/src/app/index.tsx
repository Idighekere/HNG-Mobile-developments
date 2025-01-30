import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WIDTH = Dimensions.get('window').width;

const Colors = {
  primary: '#17B8A6'
};

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={Colors.primary} />
      <ScrollView>

        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/undraw_hello.png')}
            style={styles.image}
          />
        </View>

        {/* Content Container */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Hi There!!</Text>
          <Text style={styles.description}>
            I'm <Text style={{ color: Colors.primary }}>Idighekere Udo</Text>, welcome to my simple app for the HNG12 mobile-track stage 0 task
          </Text>

          {/* Buttons Container */}
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.button, styles.githubButton]}>
              <Link href={'https://github.com/Idighekere/HNG-Mobile-developments'} asChild>
                <Text style={styles.buttonText}>Source Code</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.hngHireButton]}>
              <Link href={'https://hng.tech/hire/react-native-developers'} asChild>
                <Text style={styles.hngText}>Hire RN Dev</Text>
              </Link>
            </TouchableOpacity>
          </View>

          {/* Additional Links */}
          <View style={styles.linksContainer}>
            <Link href={'https://delve.fun'} asChild>
              <Text style={styles.linkText}>Delve</Text>
            </Link>
            <Link href={'https://telex.im'} asChild>
              <Text style={styles.linkText}>Telex</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Add a background color
  },
  imageContainer: {
    alignItems: 'center',

    // justifyContent: 'center',
    // marginTop: 20,
  },
  image: {
    width: WIDTH * 1.4,

    height: WIDTH * 0.7,
    margin: 20,
    resizeMode: 'contain',
    // borderWidth: 1
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20%',
  },
  button: {
    flex: 1,
    paddingHorizontal: 15,
    borderRadius: 7,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  githubButton: {
    backgroundColor: Colors.primary,
  },
  hngHireButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hngText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20
  },
  linkText: {
    // color: Colors.primary,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
