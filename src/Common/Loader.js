import * as React from 'react';
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Loader({ modalVisible, setModalVisible }) {
  // const navigation = useNavigation();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 100,
            height: 100,
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            elevation: 5,
          }}>
          <ActivityIndicator color={'#000'} size={'large'} />
        </View>
      </View>
    </Modal>
  );
}
export default Loader;
