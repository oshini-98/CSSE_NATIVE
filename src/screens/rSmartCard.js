import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Button,
} from 'react-native';
//import Login from './src/components/login';
// import Navigator from './src/components/HomeStack'

const RSmartCard = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View>
          {/* <ImageBackground
            source={image}
            style={styles.image}
            resizeMode="cover">
            <View style={styles.card}></View>
          </ImageBackground> */}

          <View>
            <View>
              <TextInput keyboardType="text">Enter Card Number</TextInput>
            </View>
            <View>
              <TextInput keyboardType="text">Exp Month/ Exp Year</TextInput>
            </View>
            <View>
              <TextInput keyboardType="text">CVC</TextInput>
            </View>
            <View>
              <TextInput keyboardType="text">Amount</TextInput>
            </View>

            <Button title="TRANSFER" borderRadius="10" />
          </View>

          <View>
            <Text>
              By cotinuing you agree to accept our Privacy Policy & Terms of
              Service.
            </Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
export default RSmartCard;
