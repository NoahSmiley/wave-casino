import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  return (
    <TouchableOpacity style={styles.chip}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "grey",
    borderRadius: 20,
    marginTop: 4,
    maxWidth: 110,
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Chip;
