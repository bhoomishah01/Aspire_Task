// import { Card } from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import Helper from '../../../helper/Helper';
import Font from '../../../theme/Font';
import Visacard from '../../../component/Visacard';
import {scale} from '../../../theme/Scalling';
import FlatListbtn from '../../../component/Flatlistbtm';
import {Flex} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    img: GlobalInclude.Assets.insight,
    title: 'Top-Up Account',
    dis: 'Diposit mony to your account to use with card',
  },
  {
    id: '2',
    img: GlobalInclude.Assets.transfer,
    title: 'Weekly speeding limit',
    dis: 'Yor weekly speeding limit is S$5000',
  },
  {
    id: '3',
    img: GlobalInclude.Assets.freezCard,
    title: 'Freez card',
    dis: 'Diposit mony to your account to use with card',
  },
  {
    id: '4',
    img: GlobalInclude.Assets.newCard,
    title: 'Get a new card',
    dis: 'Diposit mony to your account to use with card',
  },
  {
    id: '5',
    img: GlobalInclude.Assets.discardCard,
    title: 'Deactiveted card',
    dis: 'Diposit mony to your account to use with card',
  },
];

const Debitcard = () => {
  const Item = ({item, onPress, textColor}) => (
    <View style={{borderWidth: 0, flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <View
          style={{
            borderWidth: 0,
            flex: 1,
            flexDirection: 'row',
            height: scale(60),
          }}>
          <View
            style={{
              borderWidth: 0,
              // borderColor: 'green',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image style={styles.imagelist} source={item.img} />
          </View>
          <View
            style={{
              borderWidth: 0,
              borderColor: 'green',
              flexDirection: 'column',
              flex: 5,
              justifyContent: 'center',
            }}>
            <Text style={[styles.title]}>{item.title}</Text>
            <Text style={[styles.des]}>{item.dis}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.Flex}>
      <StatusBar
        backgroundColor={GlobalInclude.Color.ColorPeacock}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImageContainer}>
            <Image
              source={GlobalInclude.Assets.Logo}
              style={styles.headerImage}
            />
          </View>
          <View>
            <Text style={styles.headerText}>Debit Card</Text>
          </View>
          <View>
            <Text style={styles.availableBalanceText}>Available balance</Text>
          </View>
          <View style={styles.accBalanceContainer}>
            <View style={styles.accBalanceView}>
              <Text style={styles.accBalanceText}>S$</Text>
            </View>
            <Text style={styles.accBalanceNumberText}>3,000</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomView}>
        {/* <ScrollView> */}

        <Visacard />

        <SafeAreaView style={{flex: 1.3}}>
          <FlatList
            data={DATA}
            renderItem={Item}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Flex: {
    flex: 1,
    backgroundColor: GlobalInclude.Color.ColorPeacock,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  headerContainer: {
    flex: 1,
  },
  headerImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  headerImage: {
    right: scale(15),
  },
  headerText: {
    color: GlobalInclude.Color.Colorwhite,
    fontSize: scale(24),
    fontFamily: GlobalInclude.Font.AvenirNext,
    fontWeight: '800',
    marginHorizontal: scale(24),
  },
  availableBalanceText: {
    color: GlobalInclude.Color.Colorwhite,
    fontSize: scale(14),
    fontFamily: GlobalInclude.Font.AvenirNext,
    marginHorizontal: scale(24),
    paddingTop: scale(24),
  },
  accBalanceContainer: {
    flexDirection: 'row',
  },
  accBalanceView: {
    width: scale(40),
    height: scale(22),
    backgroundColor: '#01D167',
    marginHorizontal: scale(20),
    marginVertical: scale(15),
    justifyContent: 'center',
    borderRadius: 4,
  },
  accBalanceText: {
    textAlign: 'center',
    fontSize: scale(12),
    fontFamily: GlobalInclude.Font.AvenirNext,
    fontWeight: '700',
    color: GlobalInclude.Color.Colorwhite,
  },
  accBalanceNumberText: {
    textAlign: 'center',
    fontSize: scale(24),
    color: GlobalInclude.Color.Colorwhite,
    marginVertical: scale(8),
    fontWeight: '800',
  },
  bottomView: {
    backgroundColor: GlobalInclude.Color.Colorwhite,
    flex: scale(1.5),
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
  },
  hideCardNumberView: {
    width: scale(140),
    height: scale(27),
    backgroundColor: GlobalInclude.Color.Colorwhite,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    marginHorizontal: scale(187),
    bottom: scale(25),
  },
  hideCradNumberTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  EyeIconImage: {
    top: scale(7),
  },
  hideShowButtonText: {
    fontSize: scale(11),
    color: GlobalInclude.Color.lightGreen,
    top: scale(7),
    marginHorizontal: scale(5),
    fontWeight: 'bold',
  },
  imagelist:{
    marginHorizontal:scale(20)
  },
  title: {

    fontWeight: "bold",
    padding: scale(5)

},
 des:{
   marginHorizontal:scale(5)
 }
});

export default Debitcard;
