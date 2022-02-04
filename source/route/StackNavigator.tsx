import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import GlobalInclude from '../globalInclude/GlobalInclude';
//tab navigator
import TabNavigator from './TabNavigator';
//drawer Navigator
import DrawerNavigator from './DrawerNavigator';

//screen
import Splash from '../screen/auth/Splash';
import Login from '../screen/auth/Login';
import AsyncStorage from '../helper/AsyncStorage';

const stackNavigator = () => {
  const Stack = createStackNavigator();

  // const [initRoute, setInitRoute] = useState(null);

  // const sessionInfo = () => {
  //   console.log('sessionInfo =>');

  //   AsyncStorage.getItem(GlobalInclude.Constant.sessId).then((value) => {
  //     console.log('Tokan =>', value);
  //     if (value === null) {
  //       setInitRoute('DrawerNavigator');
  //     } else {
  //       // no access token
  //       setInitRoute('DrawerNavigator');
  //     }
  //   });
  // };

  // useEffect(() => {
  //   sessionInfo();
  // }, [initRoute]);

  return (
    //initRoute && (
      <Stack.Navigator initialRouteName={'Splash'} headerMode={true}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    )
  //);
};

export default stackNavigator;
