import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//import Login from './src/components/login';
// import Navigator from './src/components/HomeStack'

const Profile = props => {
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
          <View style={styles.topView}>
            <View>
              <Image
                style={styles.image}
                source={require('../asserts/Images/logo.png')}
              />
            </View>
            
              <Text style={styles.txt1}>HI, OSHINI</Text>
              <Text style={styles.txt1}>SL08989978</Text>
            
          </View>

          <View style={styles.ipt}>
            <Text style={styles.txt2}>ACCOUNT BALANCE</Text>
            <Text style={styles.txt3}>LKR 2350.00</Text>
          </View>

          <View style={styles.btn}>
              <TouchableOpacity>
                <Text style={styles.btnText}>TOP UP</Text>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <Text style={styles.btnText}>HISTORY</Text>
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
    paddingVertical: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    marginTop: 60,
    height: 650,
    width: 350,
  },
  cardImage: {
    flex: 0.2,
    // marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    // width: 100,
    // height: 200,
  },
  image: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  inputField: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'blue',
    marginTop: 10,
    paddingLeft: 10,
    color: '#05375a',
    textShadowColor: 'gray',
    fontSize: 20,
  },
  inputs: {
    // flex: 0.3,
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f2f2f2',
    // paddingBottom: 5
    // backgroundColor: 'red',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    alignItems: 'center',
  },
  bImg: {
    flex: 0.2,
  },
  txt1: {
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    height: 220,
    width: 420,
  },
  txt2: {
    color: 'darkblue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  txt3: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 35,
  },
  picker: {
    flex: 0.2,
  },
  btnText: {
    alignItems: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    textAlign: 'right',
    color: "blue",
    marginHorizontal: 20,
    padding: 12,
    width: 150,
    borderRadius: 5,
    borderBottomWidth: 5,
    borderBottomColor: '#f2f2f2',
    borderTopWidth: 5,
    borderTopColor: '#f2f2f2',
    borderLeftWidth: 5,
    borderLeftColor: '#f2f2f2',
    borderRightWidth: 5,
    borderRightColor: '#f2f2f2',
  },
  ipt: {
    marginTop: 100,
    alignItems: 'center',
    marginBottom: 100,
    height: 95,
    width: 350,
    padding: 10,
    backgroundColor: "lightblue",

    // backgroundColor: 'gray',
  },
});

export default Profile;
