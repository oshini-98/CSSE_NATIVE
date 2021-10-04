import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Register = props => {
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

          <View style={styles.card2}>
            <View style={styles.cardImage}>
              <Image
                style={styles.image}
                source={require('../asserts/Images/logo.png')}
              />
            </View>

            <View style={styles.ipt}>
              <TextInput placeholder="User ID" style={styles.inputField} />
            </View>

            <View style={styles.ipt}>
              <TextInput placeholder="Name" style={styles.inputField} />
            </View>

            <View style={styles.ipt}>
              <TextInput
                placeholder="Date of Birth"
                style={styles.inputField}
              />
            </View>

            <View style={styles.ipt}>
              <TextInput placeholder="Phone" style={styles.inputField} />
            </View>

            <View style={styles.ipt}>
              <TextInput placeholder="Address" style={styles.inputField} />
            </View>

            <View style={styles.ipt}>
              <TextInput placeholder="NIC Number" style={styles.inputField} />
            </View>

            <View>
              <TouchableOpacity style={styles.btnText}>
                <Text style={styles.btn}>REGISTER</Text>
              </TouchableOpacity>
            </View>
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
    alignItems: 'center',
  },
  topView: {
    // flex: 0.3,
    backgroundColor: 'blue',
    height: 170,
    width: 450,
  },
  card2: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 55,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    marginTop: 50,
    height: 700,
    width: 350,
    borderWidth: 0.3,
    borderRadius: 3,
  },
  set: {
    flexDirection: 'row',
    marginVertical: 10,
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
    flex: 0.3,
    // marginBottom: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 10,
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
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
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
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
    backgroundColor: "blue",
    height: 60,
    padding: 15,
    width: 200,
    // marginVertical: 10,
    borderRadius: 30,
  },
  inputField: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  ipt: {
    marginBottom: 20,
    borderWidth: 0.3,
    borderColor: 'blue',
    height: 55,
    width: 320,
    borderRadius: 4,
    paddingLeft: 8,
  },
});

export default Register;
