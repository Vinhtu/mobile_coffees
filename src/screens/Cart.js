import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

import {
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

const Cart = ({navigation}) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const unsubcribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubcribe;
  }, [navigation]);

  const getData = async () => {
    let items = await AsyncStorage.getItem('params');
    items = JSON.parse(items);
    setProduct(items);
    return items;
  };

  const deleteProduct = async (idx) => {
    let itemArr = await AsyncStorage.getItem('params');
    itemArr = JSON.parse(itemArr);
    if (itemArr) {
      let arr = itemArr;
      for (let i = 0; i < arr.length; i++) {
        if (i == idx) {
          arr.splice(i, 1);
        }
        await AsyncStorage.setItem('params', JSON.stringify(arr));
        getData();
      }
    }
  };
  


  return (
    <ScrollView>
      <View style={{paddingVertical: 24, paddingHorizontal: 16}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>
          Đang xử lý
        </Text>

        {product &&
          product.map((item, idx) => {

            if(idx == 0)
            return (
              <View style={{marginBottom: 16}}>
                <View
                  style={{
                    paddingBottom: 16,
                    height: 100,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                      marginRight: 16,
                    }}
                    source={{
                      uri: `https://imgs.vietnamnet.vn/Images/2017/02/06/17/20170206174036-1.jpg`,
                    }}
                  />
                  <View style={{marginRight: 16}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 16,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#DE3E1A',
                      }}>
                      {item.price}
                    </Text>
                  </View>
                  <View style={{alignSelf: 'center'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontStyle: 'italic',
                        color: '#1ACFDE',
                      }}>
                      Đang sử lý 
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 16}}>
          Hàng chờ
        </Text>
        {product &&
          product.map((item, idx) => {
            if(idx > 0)
            return (
              <View style={{marginBottom: 16}}>
                <View
                  style={{
                    paddingBottom: 16,
                    height: 100,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 5,
                      marginRight: 16,
                    }}
                    source={{
                      uri: `${item.uri}`,
                    }}
                  />
                  <View style={{marginRight: 16}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 16,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '100',
                        color: '#DE3E1A',
                      }}>
                      {item.price}
                    </Text>
                  </View>
                  <View style={{alignSelf: 'center', marginRight: 16}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontStyle: 'italic',
                      }}>
                      Hàng chờ : {idx}
                    </Text>
                  </View>
                  <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => deleteProduct(idx)}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontStyle: 'italic',
                        color: '#DE3E1A',
                      }}>
                      Hủy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Cart;
