import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Splash() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Login', {
            id: '1',
          })
        }>
        <Text>kirim</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Splash;
