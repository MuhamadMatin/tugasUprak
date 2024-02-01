import * as React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

function Loader({ modalVisible, setModalVisible }) {
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
