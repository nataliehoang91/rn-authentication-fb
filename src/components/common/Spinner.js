import React from "react";
import { View, ActivityIndicator } from "react-native";

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    
  }
};
const Spinner = ({ size }) => {
  return <View>
    <ActivityIndicator style={styles.spinnerStyle} size="small" />
  </View>;
};
export { Spinner };
