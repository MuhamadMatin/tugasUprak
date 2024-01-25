import * as React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function CustomTextInput({ value, onChangeText, placeholder, type, keyboardtype }) {
  return (
    <GestureHandlerRootView>
      <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', width: '90%', paddingLeft: 15, paddingRight: 15, height: 50, borderRadius: 10, borderWidth: 0.5, marginTop: 45 }}>
        <TextInput value={value} onChangeText={(txt) => onChangeText(txt)} secureTextEntry={type ? true : false} keyboardType={keyboardtype ? keyboardtype : 'default'} placeholder={placeholder} style={{ marginLeft: 10, fontSize: 18, width: '100%' }}/>
      </View>
    </GestureHandlerRootView>
  );
}

export default CustomTextInput;
