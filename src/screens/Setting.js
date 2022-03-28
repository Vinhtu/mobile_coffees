import React from 'react';

import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';
const Setting = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container_set}>
      <TextInput
        style={styles.input}
        onChangeText={() => onChangeText(value)}
        value={text}
        placeholder="Enter text"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btn_set}>
        <Text style={styles.title_btn_set}>Send data</Text>
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
