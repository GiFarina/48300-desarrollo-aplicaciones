import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  Modal,
  Pressable
} from "react-native";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const removeItem = (id) => {      
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de lista"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
        />
        <Button title="Agregar" onPress={addItem} />
      </View>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable style={styles.contentList} onPress={()=>{
            selectItem(itemData.item)
          }}>
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <View styles={styles.modalTitle}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>Eliminar Item</Text>
            </View>
            <View styles={styles.modalContent}>
              <Text>¿Está seguro que desea eliminar el item {selectedItem?.value}?</Text>
              </View>
              <View styles={styles.modalActions}>
                <Button title="Cancelar" onPress={()=>{
                  setModalVisible(false)
                  setSelectedItem(null);
                }}/>
                <Button title="Eliminar" onPress={()=>{
                  removeItem(selectedItem.id)
                }}/>
              </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
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
    marginTop: 30,
    flex: 1,
  },
  item: {
    padding: 10,
    textAlign: "center",

  },
  contentList: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  modalContainer: {
    height: 400,
    width: 300,
    marginTop: 100,
    alignSelf:'center',
    backgroundColor: 'lime',
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
  },
  modalContent: {
    padding: 10,
    width:'50%',
  },
  modalActions: {
    flexDirection:'row',
    justifyContent:'space-around',
  }
});
