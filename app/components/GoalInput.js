import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ addGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.viewForm}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={addGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
