import * as React from 'react';
import 'react-native-gesture-handler';
import Home from './src/screens/Home';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Cart from './src/screens/Cart'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <Cart {...props} />}
        screenOptions={{drawerPosition:"right",   drawerStyle:  { width: '90%' }}}
      >
        <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} /> 
      </Drawer.Navigator>
  </NavigationContainer>

  );
};

export default App;
