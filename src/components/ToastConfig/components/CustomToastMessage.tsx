import React from 'react';
import {StyleSheet, View, Animated, Platform, Text} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

interface Props {
  type: string;
  msg: string;
}

function CustomToastMessage({type, msg}: Props) {
  let bgColor = '#333';
  let textColor = '#fff';

  if (type === 'warningToast') {
    bgColor = '#fcba03';
    textColor = '#000';
  }

  return (
    <Animated.View style={[styles.modal, {backgroundColor: bgColor}]}>
      <View style={styles.subContainer}>
        {type === 'successToast' && (
          <Text
            style={[styles.icon, {fontSize: RFValue(16), color: '#4CAF50'}]}>
            ✔️
          </Text>
        )}
        <Text style={[styles.text, {color: textColor, fontSize: RFValue(14)}]}>
          {msg}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: '#fff',
  },
  icon: {
    marginRight: 5,
  },
  modal: {
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? RFPercentage(4) : 16,
    paddingHorizontal: RFPercentage(3),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default CustomToastMessage;
