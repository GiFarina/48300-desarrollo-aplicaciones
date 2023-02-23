import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.addItemInputContainer}>
        <TextInput
          placeholder="Item de lista"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
        />
        <Button title="Agregar" onPress={addItemToState} />
      </View>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              openModal(itemData.item);
            }}
          >
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eliminar Item</Text>
            <Text style={styles.modalText}>
              ¿Está seguro que desea eliminar el item{" "}
              <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
            </Text>
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancelModal}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onDeleteModal(selectedItem.id);
                }}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
  addItemInputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  item: {
    padding: 10,
    textAlign: "center",
  },
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
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonCancel: {
    backgroundColor: "#2196F3",
  },
  buttonDelete: {
    backgroundColor: "#f44336",
  },
});
