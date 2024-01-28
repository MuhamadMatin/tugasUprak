import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Profile({ route }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 70, paddingLeft: 10, paddingRight: 10 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: 'center',
        }}>
        Profile Screen
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login', {})}>
        <Text style={{ fontSize: 20 }}>kirim</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Splash', {})}>
        <Text style={{ fontSize: 20 }}>Splash</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Profile;
