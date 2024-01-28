import * as React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function CustomTextInput({ onPress, title, bgColor, textColor }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignSelf: 'center',
        height:45,
        width:'65%',
        marginTop: 50,
        borderRadius:15
      }}
      onPress={onPress}>
      <Text
        style={{
          color: textColor,
          fontSize:18,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomTextInput;
