import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';

function CustomAlert({ title, closedText }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
          <View
            style={{
              zIndex: 10,
              position: 'absolute',
              top: 0,
              width: 320,
              height: undefined,
              backgroundColor: 'white',
              borderRadius: 20,
              paddingTop: 5,
              paddingBottom: 5,
              paddingRight: 25,
              paddingLeft: 25,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              elevation: 5,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ alignSelf: 'center', fontWeight: 400, fontSize: 20 }}>{title}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', textAlign: 'center' }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ paddingTop: 10, paddingBottom: 10, color: 'black', fontSize: 12, fontWeight: 300 }}>{closedText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={{ borderRadius: 20, padding: 10, elevation: 2, backgroundColor: '#F194FF' }} onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Show Modal</Text>
      </Pressable>
    </View>
  );
}

export default CustomAlert;
