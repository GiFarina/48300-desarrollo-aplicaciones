import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import Item from "./Item";

const List = ({ items, openModal }) => {
  return (
    <FlatList
      data={items}
      renderItem={(itemData) => {
        return <Item itemData={itemData} openModal={openModal} />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
