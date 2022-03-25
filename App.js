import React from 'react';
import {Text, View, Image, Alert, TouchableOpacity} from 'react-native';

const products = [
  {
    name: 'Cafe đá',
    price: 'S: 30đ - L: 45đ',
    uri: 'https://file.hstatic.net/1000075078/file/ca-phe-den-da_2db07af3c05b4ad5ae04ec1ba04b3351.jpg',
  },
  {
    name: 'Cafe sữa đá',
    price: 'S: 30đ - L: 45đ',
    uri: 'https://neomartpro.com/wp-content/uploads/2020/05/Ca-phe-sua-da-1.jpg',
  },
  {
    name: 'Bạc sỉu',
    price: 'S: 35đ - L: 50đ',
    uri: 'https://pos.cafeongbau.com:4433/images/list/CAPHE_cafe_trung_da.png',
  },
  {
    name: 'Trà sữa',
    price: 'S: 45đ - L: 60đ',
    uri: 'bartender.edu.vn/wp-content/uploads/2015/11/tra-sua-truyen-thong.jpg',
  },
];
const App = () => {
  const bookDrink = (name) =>
    Alert.alert('Xác nhận', `Nhấn ok để mua '${name}'`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#D35400',
          marginBottom: 24,
        }}>
        Mobile Coffee
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'space-between',
          marginVertical: 16,
        }}>
        {products.map((item, idx) => {
          return (
            <TouchableOpacity
              style={{width: '48%', marginBottom: 16}}
              onPress={() => bookDrink(`${item.name}`)}>
              <View style={{height: 150, marginBottom: 16}}>
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                  source={{
                    uri: `${item.uri}`,
                  }}
                />
              </View>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 14, color: '#D35400'}}>
                {item.price}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default App;
