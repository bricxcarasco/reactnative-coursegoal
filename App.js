import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewForm}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add" style={styles.button} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  viewForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  button: {
    width: "20%",
  },
});
