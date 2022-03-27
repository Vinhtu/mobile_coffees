import * as React from 'react';
import TabLists from './src/screens/TabLists';
import Cart from './src/screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="List"
          component={TabLists}
          options={{
            headerShown: false,
            tabBarOptions: { showLabel: false },
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="th-list" color="#DE3E1A"  size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            tabBarOptions: { showLabel: false },
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="shopping-cart" color="#DE3E1A"  size={26} />
            ),
          }}
         
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
