import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function CustomTextInput({ value, onChangeText, placeholder, type, keyboardtype, icon }) {
  return (
    <GestureHandlerRootView>
      <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', width: '90%', paddingLeft: 15, paddingRight: 15, height: 50, borderRadius: 10, borderWidth: 0.5, marginTop: 30, marginBottom:10 }}>
        <Image source={icon} style={{width:30, height:30}} />
        <TextInput
          value={value}
          onChangeText={(txt) => onChangeText(txt)}
          secureTextEntry={type ? true : false}
          keyboardType={keyboardtype ? keyboardtype : 'default'}
          placeholder={placeholder}
          style={{ marginLeft: 10, fontSize: 18, width: '100%' }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

export default CustomTextInput;
