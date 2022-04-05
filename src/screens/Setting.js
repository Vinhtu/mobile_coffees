import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import axios from 'axios';

const Setting = ({navigation}) => {
  const [text, onChangeText] = React.useState('');


  const btn_setting_ads = () => {
    const params = 1;
    axios.post(`http://192/168/1/1/order/${params}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <View style={styles.container_set}>
      <TextInput
        style={styles.input}
        onChangeText={() => onChangeText(value)}
        value={text}
        placeholder="Enter text"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btn_set} onPress={() => btn_setting_ads()}>
        <Text style={styles.title_btn_set}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container_set: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 16,
    borderWidth: 1,
    color: 'red',
    padding: 10,
    borderRadius: 8,
  },
  btn_set: {
    backgroundColor: '#DE3E1A',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4
  },
  title_btn_set:{
    color: 'white'
  },
});

export default Setting;
