import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  TouchableOpacity,
  // Feather
} from 'react-native';
//import Login from './src/components/login';
// import Navigator from './src/components/HomeStack'

const Login = ({navigation}) => {

  const signUP =() => {
    navigation.navigate('SignUP')
  }

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
                source={require('../asserts/Images/logo.png')}
              />
            </View>

            <View style={styles.inputs}>
              <View style={styles.ipt}>
                <TextInput
                  placeholder="Enter User Name/ Smart Card No"
                  style={styles.inputField}
                />
                </View>

                <View style={styles.ipt}>
                <TextInput
                  placeholder="Enter Password"
                  style={styles.inputField}
                 />
                 </View>
                 <View>
                   <Text style={styles.picker}></Text>
              <Text style={styles.txt1} onPress={signUP} >Create Account</Text>
              </View>
            </View>

            <View style={styles.lgBtns}>
              <TouchableOpacity style={styles.btnText}>
                <Text style={styles.btn}>LOGIN</Text>
              </TouchableOpacity>
              <Text style={styles.txt2}>OR</Text>
              <TouchableOpacity style={styles.btnText}>
                <Text style={styles.btn}>SCAN QR</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.bImg}></View>

          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
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
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 70,
  },
  inputField: {
    flex: 1,
     alignItems: 'center',
    borderColor: 'blue',
    marginTop: 10,
    paddingLeft: 10,
    color: '#05375a',
    textShadowColor: 'gray',
    fontSize: 20
  },
  inputs: {
    flex: 0.3,
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f2f2f2',
    // paddingBottom: 5
    // backgroundColor: 'red',
  },
  lgBtns:{
    marginTop:150,
  },
  btn: {
    color: '#fff',
  
  },
  bImg: {
    flex: 0.2,
  },
  txt1: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    fontSize: 20

  },
  txt2: {
    color: 'black',
    fontSize: 20,

  },
  picker: {
    flex: 0.2
  },
  btnText: {
    alignItems: 'center',
    backgroundColor: "#009AE0",
    padding: 15,
    width: 200,
    marginVertical: 10,
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

export default Login;
