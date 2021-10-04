import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
//import Login from './src/components/login';
// import Navigator from './src/components/HomeStack'

const PjComletion = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View style={styles.container}>
          {/* <ImageBackground
            source={image}
            style={styles.image}
            resizeMode="cover">
            <View style={styles.card}></View>
          </ImageBackground> */}
          <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image 
            style={styles.image}
            source={require('../asserts/Images/logo.png')} />
          </View>
          <Text style={styles.Ttxt}>JOUNEY COMPLETED!</Text>

         <View style={styles.card2}>
            <View style={styles.set}>
              <View style={styles.set1}>
                <Text style={styles.txt1}>ARALIYA TRAVALS</Text>
                <Text style={styles.txt2}>COLOMBO-GALLE 02</Text>
              </View>
              <View style={styles.set2}>
                <Text style={styles.txt1}>LUXURY</Text>
              </View>
            </View>

            <View style={styles.set}>
              <View style={styles.set1}>
                <Text style={styles.txt3}>Colombo Fort</Text>
                <Text style={styles.txt4}>13:20</Text>
              </View>
              <View style={styles.set2}>
                <Text style={styles.txt3}>Panadura</Text>
                <Text style={styles.txt4}>13:54</Text>
              </View>
            </View>

            <View style={styles.set}>
              <View style={styles.set1}>
                <Text style={styles.txt5}>PAID : LKR 70.00</Text>
              </View>
              <View style={styles.set2}>
                <Text style={styles.txt4}>11/09/2021</Text>
              </View>
            </View>
         </View>

          <View>
          <TouchableOpacity style={styles.btnText}>
                <Text style={styles.btn}>GET TICKET</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    // paddingHorizontal: 50,
    backgroundColor: '#fff',
    marginTop: 60,
    height: 650,
    width: 370,
  },
  card2: {
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 40,
    height: 180,
    width: 340,
    borderColor: "black",
    borderWidth: 1,
  },
  set: {
    flexDirection: 'row',
    marginVertical: 10,
    colo: "red"
  },
  set1: {
    flex: 0.7,
    alignItems: 'flex-start',
  },
  set2: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  cardImage: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingBottom:80,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 70,
  },
  inputs: {
    flex: 0.3,
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f2f2f2',
    // paddingBottom: 5
    // backgroundColor: 'red',
  },
  btn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',

  },
  bImg: {
    flex: 0.2,
  },
  Ttxt: {
    // paddingTop: 70,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue'
  },
  txt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  txt2: {
    fontSize: 13
  },
  txt3: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  txt4: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  txt5: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkblue'
  },
  picker: {
    flex: 0.2
  },
  btnText: {
    alignItems: 'center',
    backgroundColor: "blue",
    height: 60,
    padding: 15,
    width: 200,
    // marginVertical: 10,
    borderRadius: 30,
  },
  ipt: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    borderLeftWidth: 1,
    borderLeftColor: '#f2f2f2',
    borderRightWidth: 1,
    borderRightColor: '#f2f2f2',
    height: 60,
    
    // backgroundColor: 'gray',
  }
});

export default PjComletion;
