import React from 'react';
import {StyleSheet, View} from 'react-native';
import GlobalInclude from './source/globalInclude/GlobalInclude';
// import {Root} from 'native-base';
import RootNavigators from './source/route/Route';
import { Provider } from "react-redux";
import store from "./source/redux/store/Store";

console.disableYellowBox = true;
const App = () => {
  const Navigation = RootNavigators;
  return (
    <>
     {/* <Root> */}
      <Provider store={store}> 
      <Navigation />
      </Provider>
      <GlobalInclude.Loader ref={(ref) => (global.global_loader_reff = ref)} />
      <GlobalInclude.Alert ref={(ref) => (global.toast_reff = ref)} /> 
     {/* </Root> */}
     </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;

