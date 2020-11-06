import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, item.uid)}>
      <View style={styles.listItem}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
