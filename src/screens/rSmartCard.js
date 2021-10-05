import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

//Recharge Smart Card
const RSmartCard = props => {
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
            

              <View style={styles.ipt}>
              <TextInput
                  placeholder="Enter Card Number"
                  style={styles.inputField}
                 />
              </View>

              <View style={styles.ipt}>
              <TextInput
                  placeholder="Exp Month/ Exp Year"
                  style={styles.inputField}
                 />
              </View>

           
              <View style={styles.ipt}>
              <TextInput
                  placeholder="CVC"
                  style={styles.inputField}
                 />
              </View>
 
              <View style={styles.ipt}>
              <TextInput
                  placeholder="Amount"
                  style={styles.inputField}
                 />
              </View>
            
            
          <View>
            <TouchableOpacity style={styles.btnText}>
              <Text style={styles.btn}>TRANSFER</Text>
            </TouchableOpacity>
          </View>

            <Text style={styles.txt1}>
              By cotinuing you agree to accept our Privacy Policy & Terms of
              Service.
            </Text>
          

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
    backgroundColor: '#009AE0',
    height: 170,
    width: 450,
  },
  card2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    // paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: -80,
    marginBottom: 40,
    height: 600,
    width: 370,
    borderColor: 'gray',
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    marginTop: 40,
    borderColor: 'red',
    borderWidth: 2,
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
    fontSize: 19,
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
    backgroundColor: '#009AE0',
    height: 55,
    padding: 10,
    width: 170,
    marginTop: 30,
    borderRadius: 20,
    marginBottom: 30
  },
  inputField: {
    fontSize:17,
    fontWeight: 'bold'
  },
  ipt: {
    marginBottom: 30,
    borderWidth: 0.3,
    borderColor: 'blue',
    height: 55,
    width: 320,
    borderRadius: 4,
    paddingLeft: 8
  },
});

export default RSmartCard;
