import React, { useState } from 'react';

import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PopupWindow = ({ buttonText = 'Tap to open modal' }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Use the `buttonText` prop to change the display("Tap to open modal") text */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.fullScreen}
          activeOpacity={0.3}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={styles.draggableIndicator} />

              {/* This button should change with reusable button component  */}
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.doneButtonText}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreen: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '80%',
    maxHeight: '70%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
  },

  doneButton: {
    backgroundColor: '#130160',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  doneButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  draggableIndicator: {
    alignSelf: 'center',
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#5B5858',
    marginVertical: 8,
  },
});

export default PopupWindow;
