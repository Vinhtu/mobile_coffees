import React from 'react';
import {Text, View, Image, Alert, TouchableOpacity, Button ,ScrollView} from 'react-native';
import bg from '../assets/logo_remove_bg.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

const products = [
  {
    id: 1,
    name: 'Cafe đá',
    price: 'S: 30đ - L: 45đ',
    uri: 'https://benhvienanviet.com/wp-content/uploads/2019/07/uong-cafe-benh-vien-an-viet.png',
 
  },
  {
    id: 2,
    name: 'Cafe sữa đá',
    price: 'S: 30đ - L: 45đ',
    uri: 'https://imgs.vietnamnet.vn/Images/2017/02/06/17/20170206174036-1.jpg',

  },
  {
    id: 3,
    name: 'Bạc sỉu',
    price: 'S: 35đ - L: 50đ',
    uri: 'https://meta.vn/Data/image/2020/05/29/bac-xiu-la-gi-all.jpg',
 
  },
  {
    id: 4,
    name: 'Trà sữa',
    price: 'S: 45đ - L: 60đ',
    uri: 'https://cdn-www.vinid.net/2020/09/8cb97047-tr%C3%A0-s%E1%BB%AFa-pozaa-tea-%C6%B0u-%C4%91%C3%A3i.jpg',
  },
  {
    id: 4,
    name: 'Trà sữa',
    price: 'S: 45đ - L: 60đ',
    uri: 'https://cdn-www.vinid.net/2020/09/8cb97047-tr%C3%A0-s%E1%BB%AFa-pozaa-tea-%C6%B0u-%C4%91%C3%A3i.jpg',
  },
];
const TabLists = ({navigation}) => {
  const addCart = async value => {
    let itemArray =  await AsyncStorage.getItem('params');
    itemArray = JSON.parse(itemArray);
    if(itemArray != null){
      let arr = itemArray;
      arr.push(value);
      try{
        await AsyncStorage.setItem('params', JSON.stringify(arr));
        navigation.navigate('Cart');
      }catch(e){
         return e
      }
    }
    else{
      let arrs = [];
      arrs.push(value);  
      try{
        await AsyncStorage.setItem('params', JSON.stringify(arrs));
        navigation.navigate('Cart');
      }catch(e){
        return e
      }
    }
  }
  const deletes = async(key) => {
    try {
        await AsyncStorage.removeItem('params');
        let itemArray =  await AsyncStorage.getItem('params');
        itemArray = JSON.parse(itemArray);
        console.log(itemArray,'delete arr')
        return true;
    }
    catch(exception) {
        return false;
    }
}
  return (
    <ScrollView>
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <View style={{alignItems: 'center', marginBottom: 24}}>
        <Image
          style={{height: 100, width: 400}}
          source={bg}
        />
      </View>

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
              onPress={() => addCart(item)}
              >
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
              <Text style={{fontSize: 14, color: '#D35400'}}>{item.price}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  
    </ScrollView>
  );
};

export default TabLists;

const demo = () => {
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
              <Text style={{fontSize: 14, color: '#D35400'}}>{item.price}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
