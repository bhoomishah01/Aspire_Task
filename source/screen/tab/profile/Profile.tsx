import React, {useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';

const profile = () => {
  return (
    <View style={styles.view}>
      <GlobalInclude.Statusbar backgroundColor={'lightgreen'} />
      <View style={styles.profileTextView}>
        <GlobalInclude.Text text={'Profile'} textStyle={styles.profileText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  profileTextView: {
    flex: 1,
    backgroundColor: GlobalInclude.Color.Colorwhite,
  },
  profileText: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 200,
  },
});

export default profile;
