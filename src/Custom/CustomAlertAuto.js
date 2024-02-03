import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';

function CustomAlertAuto({ title, closedText, setModalVisible, modalVisible }) {
  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
    }
  }, [modalVisible]);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!setModalVisible);
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
              elevation: 2,
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
    </View>
  );
}

export default CustomAlertAuto;

// import React, { useState } from 'react';
// import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

// const CustomAlertAuto = ({ visible, setVisible }) => {
//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={visible}
//       onRequestClose={() => {
//         setVisible(!visible);
//       }}>
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <Text style={styles.modalText}>Are you sure you want to add to the cart?</Text>

//           <TouchableHighlight
//             style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
//             onPress={() => {
//               setVisible(!visible);
//             }}>
//             <Text style={styles.textStyle}>Yes</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default CustomAlertAuto;
