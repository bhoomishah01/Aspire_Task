import React, {useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import Helper from '../../../helper/Helper';

const Payments = () => {
  return (
    <View style={styles.view}>
      <GlobalInclude.Statusbar backgroundColor={'lightgreen'} />
      <View style={styles.paymentTextView}>
        <GlobalInclude.Text text={'Payments'} textStyle={styles.paymentText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  paymentTextView: {
    flex: 1,
    backgroundColor: GlobalInclude.Color.Colorwhite,
  },
  paymentText: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 200,
  },
});

export default Payments;
