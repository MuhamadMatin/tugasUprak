import * as React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

function CustomTextInput({ onPress, title, bgColor, textColor }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 45,
        width: '90%',
        marginTop: 50,
        borderRadius: 15,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: textColor,
          fontSize: 18,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomTextInput;
