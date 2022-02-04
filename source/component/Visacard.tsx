import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Images from '../theme/Assets';
import GlobalInclude from '../globalInclude/GlobalInclude';
import {scale} from '../theme/Scalling';
interface Props {
  type: String;
}
const visaCard = ({type}: Props) => {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(true);
  const hideText = () => {
    if (hide) {
      setHide(false);
    } else {
      setHide(true);
    }
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const showText = () => {};
  return (
    <View style={styles.hideCardView}>
      <TouchableOpacity onPress={() => hideText()}>
        <View style={styles.hideCardNumberView}>
          <View style={styles.hideCradNumberTextView}>
            {hide == true ? (
              <Image
                style={styles.EyeIconImage}
                source={GlobalInclude.Assets.eyeIconHide}
              />
            ) : (
              <Image
                style={styles.EyeIconImage}
                source={GlobalInclude.Assets.eyeIconShow}
              />
            )}
            {hide == true ? (
              <Text style={styles.hideShowButtonText}>Hide Card Number</Text>
            ) : (
              <Text style={styles.hideShowButtonText}>Show Card Number</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.cardModalView}>
        <View style={styles.cardModelViewContainer}>
          <Text style={styles.aspireText}>aspire</Text>

          <Image style={styles.img2} source={GlobalInclude.Assets.Home} />
        </View>
        <Text style={styles.nameText}>Mark Henry</Text>
        {hide == true ? (
          <View style={styles.cardCodeTextView}>
            <Text style={styles.cardCodeText}>1 2 3 4 </Text>
            <Text style={styles.cardCodeText}> 4 5 6 7 </Text>
            <Text style={styles.cardCodeText}>1 2 3 4</Text>
            <Text style={styles.cardCodeText}>1 2 3 4 </Text>
          </View>
        ) : (
          <View style={styles.cardCodehideTextView}>
            <Text style={styles.cardCodeText}>****</Text>
            <Text style={styles.cardCodeText}>****</Text>
            <Text style={styles.cardCodeText}>****</Text>
            <Text style={styles.cardCodeText}>1 2 3 4 </Text>
          </View>
        )}
        <View
          style={styles.cardYearTextView}>
          <Text style={styles.cardYearText}>Thru: 20/22</Text>
          {hide == true ? (
            <Text style={styles.cardDatainnerText}> CVV: 256</Text>
          ) : (
            <Text style={styles.cardDatainnerText}> CVV: * * * </Text>
          )}
        </View>
        <View style={styles.visaIconView}>
          <Image
            style={styles.visaIcon}
            source={GlobalInclude.Assets.VisaLogo}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hideCardView: {
    flex: 1,
    bottom: scale(80),
  },
  hideCardNumberView: {
    width: scale(140),
    height: scale(27),
    backgroundColor: GlobalInclude.Color.Colorwhite,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    marginHorizontal: scale(187),
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
  cardModalView: {
    backgroundColor: GlobalInclude.Color.lightGreen,
    width: scale(310),
    borderRadius: 10,
    padding: scale(10),
    marginHorizontal: scale(20),
  },
  aspireText: {
    color: GlobalInclude.Color.Colorwhite,
    fontSize: scale(17),
    marginHorizontal: scale(5),
    marginTop: scale(10),
  },
  cardModelViewContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  img2: {
    alignSelf: 'flex-end',
  },
  nameText: {
    color: GlobalInclude.Color.Colorwhite,
    fontSize: scale(22),
    marginHorizontal: scale(20),
    marginTop: scale(10),
    fontWeight: 'bold',
  },
  cardCodeText: {
    color: GlobalInclude.Color.Colorwhite,
    marginTop: scale(20),
    fontSize: scale(13),
    paddingRight: scale(30),
    // marginHorizontal:scale(20) ,
  },
  cardCodeTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
  },
  cardYearTextView:{
    flexDirection: 'row',
    top: scale(10),
  },
  cardYearText: {
    color: GlobalInclude.Color.Colorwhite,
    fontSize: scale(12),
    marginLeft: scale(20),
  },
  cardDataText: {
    alignSelf: 'flex-end',
  },
  cardDatainnerText: {
    marginHorizontal: scale(32),
    fontSize: scale(13),
    color: GlobalInclude.Color.Colorwhite,
  },
  cardCodehideTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(24),
  },
  visaIconView: {
    alignItems: 'flex-end',
    marginRight: scale(10),
    marginVertical: scale(10),
  },
  visaIcon: {
    width: scale(60),
    height: scale(20),
  },
});

export default visaCard;
