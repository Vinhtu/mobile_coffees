import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import ParallaxScrollView from 'react-native-parallax-scroll-view-new';

import {
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Cart = ({navigation}) => {
  const [product, setProduct] = useState();
  // const []
  useEffect(() => {
    // const unsubcribe = navigation.addListener('focus', () => {

    getData();
    // console.log("run")
    // });
    // return unsubcribe;
  });

  const getData = async () => {
    let items = await AsyncStorage.getItem('params');
    items = JSON.parse(items);
    setProduct(items);

    // if (items[0]) {
    //   postData(item[0]);
    // }
    return items;
  };

  const deleteProduct = async idx => {
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

  // const postData = item => {
  //   setInterval(function () {
  //     axios
  //       .post(`http://192.168.1.16:3001/orders`, {value: item.id})
  //       .then(function (response) {
  //         //  if(response.status == 'done'){
  //         //   deleteProduct(0);
  //         //  }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, 1000);
  // };

  if (product == null) {
    return (
      <View style={{width: '100%', padding: 24}}>
        <Text style={{fontSize: 20}}>Trống</Text>
      </View>
    );
  }
  return (
    // <DrawerContentScrollView >
    <View style={{position: 'relative'}}>
     
      <ScrollView>
        <View
          style={{
            paddingVertical: 170,
            paddingHorizontal: 16,
            zIndex: 0,
            backgroundColor: 'white',
          }}>
          {product &&
            product.map((item, idx) => {
              if (idx > 0)
                return (
                  <View
                    style={{
                      minHeight: 100,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 24,
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 20,
                          marginRight: 16,
                        }}
                        source={{
                          uri: `${item.uri}`,
                        }}
                      />

                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 16,
                            color: 'black',
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
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      
                      }}>
                      <View
                        style={{
                         
                          marginRight: 16,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontStyle: 'italic',
                            color: 'black',
                          }}>
                          Stt: {idx}
                        </Text>
                      </View>
                      <TouchableOpacity
                       
                        onPress={() => deleteProduct(idx)}>
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
     
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: 140,
          backgroundColor: 'white',
          opacity: 0.8,
        }}></View>
      <View
        style={{
          position: 'absolute',
          zIndex: 2,
          width: '100%',
          height: 140,
          paddingVertical: 24,
          paddingHorizontal: 16,
        }}>
        {product &&
          product.map((item, idx) => {
            if (idx == 0)
              return (
                <View style={{marginBottom: 16}}>
                  <View
                    style={{
                      paddingBottom: 16,
                      height: 100,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 20,
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
                            color: 'black',
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
                    </View>
                    <View style={{alignSelf: 'center'}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontStyle: 'italic',
                          color: '#1ACFDE',
                        }}>
                        Đang xử lý
                      </Text>
                    </View>
                  </View>
                </View>
              );
          })}
      </View>
    </View>

    // </DrawerContentScrollView>
  );
};

export default Cart;
