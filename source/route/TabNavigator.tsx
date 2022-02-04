import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//tab navigator
import TabNavigator from './TabNavigator';
//drawer Navigator
import DrawerNavigator from './DrawerNavigator';
//screen
import Debitcard from '../screen/tab/debitcard/Debitcard';
import Profile from '../screen/tab/profile/Profile';
import Home from '../screen/tab/home/Home';
import Credit from '../screen/tab/credit/Credit';
import Payments from '../screen/tab/payments/Payments';
import GlobalInclude from '../globalInclude/GlobalInclude';
import Images from '../theme/Assets';
// import Font from '../theme/Font';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabnavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        showIcon: false,
        style: {
          backgroundColor: 'white',

          height: 50,

          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      initialRouteName={'debitcard'}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const image = focused ? GlobalInclude.Assets.Home : GlobalInclude.Assets.Home;
            return (<View style={styles.mainView}>
              <Image source={image} style={{ }} />
              <Text style={
                focused ? styles.textStyleUnClick : styles.textStyleClick
              }>Home</Text>
              </View>)
          },
        
        }}
      />
      <Tab.Screen
        name="debitcard"
        component={Debitcard}
        options={{
       headerShown: false,



          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const image = focused ? GlobalInclude.Assets.Card : GlobalInclude.Assets.Card;
            return (<View style={styles.mainView}>
              <Image source={image} style={{ }} />
              <Text style={
                focused ? styles.textStyleUnClick : styles.textStyleClick
              }>Debit card</Text>
              </View>)
          },
        
        }}
      />
     <Tab.Screen
        name="payments"
        component={Payments}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const image = focused ? GlobalInclude.Assets.Payments : GlobalInclude.Assets.Payments;
            return (<View style={styles.mainView}>
              <Image source={image} style={{  }} />
              <Text style={
                focused ? styles.textStyleUnClick : styles.textStyleClick
              }>Payments</Text>
              </View>)
          },
        
        }}
      />
      <Tab.Screen
        name="Credit"
        component={Credit}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const image = focused ? Images.Credit : Images.Credit;
            return (<View style={styles.mainView}>
              <Image source={image} style={{ }} />
              <Text style={
                focused ? styles.textStyleUnClick : styles.textStyleClick
              }>Credit</Text></View>)
          },

        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused }) => {
            const image = focused ? GlobalInclude.Assets.user : GlobalInclude.Assets.user;
            return (<View style={styles.mainView}>
              <Image source={image} style={{  }} />
              <Text style={
                focused ? styles.textStyleUnClick : styles.textStyleClick
              }>Profile</Text></View>)
          },

        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleUnClick: {
    color: '#01D167',
    fontSize: 9,
  },
  textStyleClick: {
    color: '#DDDDDD',
    fontSize: 9,
  },
});

export default tabnavigator;
