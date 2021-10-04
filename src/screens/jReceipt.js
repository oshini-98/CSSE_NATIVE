import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//import Login from './src/components/login';
// import Navigator from './src/components/HomeStack'

const JReceipt = props => {
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

          <View style={styles.topView}></View>
 
            <View style={styles.card2}>
              <View style={styles.set}>
                <View style={styles.set1}>
                  <Text style={styles.txt5}></Text>
                </View>
                <View style={styles.set2}>
                  <Text style={styles.txt6}>TOTAL : LKR 70.00</Text>
                </View>
              </View>

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
                  <Text style={styles.txt5}>WP NA-5308</Text>
                </View>
                <View style={styles.set2}>
                  <Text style={styles.txt4}>11/09/2021</Text>
                </View>
              </View>

              <View style={styles.set}>
                <View style={styles.set1}>
                  <Text style={styles.txt2}>27KM</Text>
                </View>
                <View style={styles.set2}>
                  <Text style={styles.txt2}>RECEIPT ID : #09383674</Text>
                </View>
              </View>

              <View style={styles.cardImage}>
                <Image
                  style={styles.image}
                  source={require('../asserts/Images/logo.png')}
                />
              </View>
            </View>

          <View>
            <TouchableOpacity style={styles.btnText}>
              <Text style={styles.btn}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    // flex: 0.3,
    backgroundColor: 'blue',
    height: 170,
    width: 450,
  },
  card2: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: -80,
    marginBottom: 40,
    height: 500,
    width: 370,
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 5,
  },
  set: {
    flexDirection: 'row',
    marginVertical: 10,
    colo: 'red',
  },
  set1: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  set2: {
    flex: 0.5,
    alignItems: 'flex-end',
    fontWeight: 'bold',
  },
  cardImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    marginTop: 40,
    borderColor: 'red',
    borderWidth: 2
    // backgroundColor: 'red',
    // paddingBottom: 60,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    // borderColor: 'red',
    // berderWidth: 2
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
    color: 'blue',
  },
  txt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  txt2: {
    fontSize: 13,
  },
  txt3: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  txt4: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  txt5: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  txt6: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  picker: {
    flex: 0.2,
  },
  btnText: {
    alignItems: 'center',
    backgroundColor: 'darkblue',
    height: 65,
    padding: 15,
    width: 170,
    marginTop: 20,
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
  },
});

export default JReceipt;
