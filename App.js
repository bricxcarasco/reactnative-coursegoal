import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./app/components/GoalInput";
import GoalItem from "./app/components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uid: Math.random().toString(), value: enteredGoal },
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem item={itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
