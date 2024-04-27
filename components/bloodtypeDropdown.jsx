import React from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { FontSize } from "../global/GlobalStyles";

const data = [
  { label: "O negative", value: "O-" },
  { label: "O positive", value: "O+" },
  { label: "A negative", value: "A-" },
  { label: "A positive", value: "A+" },
  { label: "B negative", value: "B-" },
  { label: "B positive", value: "B+" },
  { label: "AB negative", value: "AB-" },
  { label: "AB positive", value: "AB+" },
];

export default function bloodtypeDropdowns(props) {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Bloodtype"
      value={props.value}
      onChange={(item) => {
        props.onChange(item.value);
      }}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 55,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    width: 160,
    marginBottom: 20,
  },

  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: FontSize.xsmall,
  },
  placeholderStyle: {
    fontSize: FontSize.xsmall,
    color: "#565656",
  },
  selectedTextStyle: {
    fontSize: FontSize.xsmall,
  },
});
