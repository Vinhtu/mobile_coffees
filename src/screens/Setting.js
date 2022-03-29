import React from 'react';

import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const ads = require('ads-client')
// import ads from 'ads-client'
const Setting = ({navigation}) => {
  const [text, onChangeText] = React.useState('');


  const btn_setting_ads = () => {
    // const config = JSON.parse(text)
    cosole.log(ads, 'ads');
    // const client = new ads.Client(config)
    // client.connect()
    //   .then(res => {   
    //     console.log(`Connected to the ${res.targetAmsNetId}`)
    //     console.log(`Router assigned us AmsNetId ${res.localAmsNetId} and port ${res.localAdsPort}`)
    
    //     return client.disconnect()
    //   })
    //   .then(() => {
    //     console.log('Disconnected')
    //   })
    //   .catch(err => {
    //     console.log('Something failed:', err)
    //   })


    //  localAmsNetId: '192.168.1.10.1.1',  //Can be anything but needs to be in PLC StaticRoutes.xml file
    // localAdsPort: 32750,                //Can be anything that is not used
    // targetAmsNetId: '192.168.1.120.1.1',
    // targetAdsPort: 851,
    // routerAddress: '192.168.1.120',     //PLC ip address
    // routerTcpPort: 48898   

    // {"localAmsNetId":"192.168.1.10.1.1","localAdsPort":32750,"targetAmsNetId":"192.168.1.120.1.1","targetAdsPort":851,"routerAddress":"192.168.1.120","routerTcpPort":48898}

    // navigation.navigate('List');
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
