import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Button from "./Button";

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onDeleteModal,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Eliminar Item</Text>
          <Text style={styles.modalText}>
            ¿Está seguro que desea eliminar el item{" "}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
          </Text>
          <View style={styles.modalActions}>
            <Button
              styleButtonType={styles.buttonCancel}
              title="Cancelar"
              onPress={onCancelModal}
            />
            <Button
              styleButtonType={styles.buttonDelete}
              title="Eliminar"
              onPress={() => {
                onDeleteModal(selectedItem.id);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonCancel: {
    backgroundColor: "#2196F3",
  },
  buttonDelete: {
    backgroundColor: "#f44336",
  },
});
