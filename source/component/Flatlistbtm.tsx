import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
    {
      id:"1",
      img:require('../assets/Icon/insight.png'),
      title: "Top-Up Account",
      dis:"Diposit mony to your account to use with card"
    },
    {
        id:"1",
        img:require('../assets/Icon/insight.png'),
        title: "Top-Up Account",
        dis:"Diposit mony to your account to use with card"
      },
      {
        id:"1",
        img:require('../assets/Icon/insight.png'),
        title: "Top-Up Account",
        dis:"Diposit mony to your account to use with card"
      },
      {
        id:"1",
        img:require('../assets/Icon/insight.png'),
        title: "Top-Up Account",
        dis:"Diposit mony to your account to use with card"
      },
      {
        id:"1",
        img:require('../assets/Icon/insight.png'),
        title: "Top-Up Account",
        dis:"Diposit mony to your account to use with card"
      },
   
  ];

  const Item = ({ item, onPress, textColor }) => (
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={onPress} style={[styles.item,]}>
   
    <Text style={[styles.title]}>{item.title}</Text>
      <Text style={[styles.dis]}>{item.dis}</Text>
      <Image
            style={styles.img2}
            source={item.img}
          />
   
      
    </TouchableOpacity>
    </View>
   
  );

const FlatListbtm = () => {

    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "white" : "#f9c2ff";
        // const color = item.id === selectedId ? 'Black' : 'white';
     
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
        //   backgroundColor={{ backgroundColor }}
        //   textColor={{ color }}
        />
      );
    };

    return (
        
        <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    fViewlogo: {
        marginRight: '5%',
    },
    fView3: {
        flexDirection: 'row',
        marginTop: '7%',
        marginHorizontal: '6%',
        // backgroundColor:'#01D167',
        // borderRadius:16,
    },
    vText1: {
        fontSize: 14,
        color: '#25345F',
        fontWeight: 'bold',
    },
    img2: {
        alignSelf: 'flex-start',
        
      },
      title: {
        fontSize: 15,
        marginLeft:50,
        justifyContent:'center',
        
        
      },
      dis: {
          padding:8
      }
});

export default FlatListbtm;