import React from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuDrawer from 'react-native-side-drawer';
import Feather from 'react-native-vector-icons/Feather';
import Cart from './Cart';
import bg from '../assets/logo_remove_bg.png';
import bg_mobile_coffee from '../assets/bg_mobile_coffee.png';

const products = [
  {
    id: 1,
    name: 'Cafe đá',
    price: 'Miễn phí',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKTYo3GJ26dG2Y2ZwDL2zJxIwMLj09LuBp7jCvsvRyp38GCncwXiNHdTRBBZTBYrJuig&usqp=CAU',
    quote: '"Ở đây có bán cafe ngon hơn người yêu cũ của bạn !"',
  },
  {
    id: 2,
    name: 'Cafe nóng ',
    price: 'Miễn phí',
    uri: 'https://benhvienanviet.com/wp-content/uploads/2019/07/uong-cafe-benh-vien-an-viet.png',
    quote:
      '"Một ly cà phê ngon là phải vừa ngọt vừa đắng. Một tình yêu lý tưởng là một tình yêu vừa ngọt ngào, vừa đắng cay."',
  },
  {
    id: 3,
    name: 'Cafe sữa',
    price: 'Miễn phí',
    uri: 'https://meta.vn/Data/image/2020/05/29/bac-xiu-la-gi-all.jpg',
    quote:
      '"Nếu bạn uống 2 ly cafe trong 1 ngày mua đông, bạn sẽ thức cho đến tận lúc đi ngủ"',
  },
  {
    id: 4,
    name: 'Bạc sỉu',
    price: 'Miễn phí',
    uri: 'https://i0.wp.com/caphekhoanbetong.com/wp-content/uploads/2021/08/bac-xiu-ca-phe-da-giao-hang-online-10.jpg?fit=720%2C720&ssl=1',
    quote:
      '"Cà phê chỉ có một màu đen quen thuộc nhưng tùy tâm trạng của mỗi người mà quyết định ngọt hay đắng."',
  },
];


const Home = ({navigation}) => {
  const addCart = async value => {
    Alert.alert('Xác nhận', `Đặt mua ${value.name}`, [
      {
        text: 'Đồng ý',
        onPress: async () => {
          let itemArray = await AsyncStorage.getItem('params');
          itemArray = JSON.parse(itemArray);

          if (itemArray != null) {
            let arr = itemArray;
            arr.push(value);
            try {
              await AsyncStorage.setItem('params', JSON.stringify(arr));
            } catch (e) {
              return e;
            }
          } else {
            let arrs = [];
            arrs.push(value);
            try {
              await AsyncStorage.setItem('params', JSON.stringify(arrs));
            } catch (e) {
              return e;
            }
          }
        },
      },
      {
        text: 'Hủy',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

 

  return (
    <>
      <View style={{position: 'relative'}}>
        <ScrollView>
          <View
            style={{
              zIndex: 2,
              width: '100%',
              paddingHorizontal: 16,
              paddingVertical: 24,
              paddingTop: 120,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              {products.map((item, idx) => {
                return (
                  <TouchableOpacity onPress={() => addCart(item)}>
                    <View
                      style={{
                       
                        marginBottom: 16,
                        flexWrap: 'nowrap',
                        minHeight: 140,
                        position:'relative'
                      }}>
                      <View
                        style={{
                          height: 140,
                          marginBottom: 16,
                       
                        }}>
                        <Image
                          style={{width: 120, height: 120, borderRadius: 30}}
                          source={{
                            uri: `${item.uri}`,
                          }}
                        />
                      </View>
                      <View 
                      style={{width: '100%', position: 'absolute', paddingLeft: 136}}
                      >
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 8,
                          }}>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              color: '#D35400',
                            }}>
                            {item.name}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'black',
                              paddingTop: 6,
                            }}>
                            {item.price}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'black',
                              fontStyle: 'italic',
                              wordWrap: 'break-word',
                            }}>
                            {item.quote}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            width: '100%',
            opacity: 0.8,
            height: 80,
            zIndex: 8,
          }}
        />

        <View
          style={{
            position: 'absolute',
            zIndex: 9,
            width: '100%',
            left: 0,
            paddingVertical: 24,
            paddingHorizontal: 16,
          }}>
          <View style={{alignItems: 'flex-start'}}>
            <Image style={{height: 50, width: 200}} source={bg} />
          </View>
        </View>
        <View style={{position: 'absolute', zIndex: 9, right: 0}}>
            <TouchableOpacity
              style={{
                marginVertical: 24,
                marginHorizontal: 16,
                paddingVertical: 8,
                paddingHorizontal: 12,
                height: 40,
                borderRadius: 4,
                backgroundColor: '#DE3E1A',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.openDrawer()}>
              <Feather name="shopping-cart" color="white" size={24} />
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
