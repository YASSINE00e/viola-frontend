import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { FontSize } from "../global/GlobalStyles";

const data = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
  { label: "19", value: "19" },
  { label: "20", value: "20" },
  { label: "21", value: "21" },
  { label: "22", value: "22" },
  { label: "23", value: "23" },
  { label: "24", value: "24" },
  { label: "25", value: "25" },
  { label: "26", value: "26" },
  { label: "27", value: "27" },
  { label: "28", value: "28" },
  { label: "29", value: "29" },
  { label: "30", value: "30" },
  { label: "31", value: "31" },
  { label: "32", value: "32" },
  { label: "33", value: "33" },
  { label: "34", value: "34" },
  { label: "35", value: "35" },
  { label: "36", value: "36" },
  { label: "37", value: "37" },
  { label: "38", value: "38" },
  { label: "39", value: "39" },
  { label: "40", value: "40" },
  { label: "41", value: "41" },
  { label: "42", value: "42" },
  { label: "43", value: "43" },
  { label: "44", value: "44" },
  { label: "45", value: "45" },
  { label: "46", value: "46" },
  { label: "47", value: "47" },
  { label: "48", value: "48" },
  { label: "49", value: "49" },
  { label: "50", value: "50" },
  { label: "51", value: "51" },
  { label: "52", value: "52" },
  { label: "53", value: "53" },
  { label: "54", value: "54" },
  { label: "55", value: "55" },
  { label: "56", value: "56" },
  { label: "57", value: "57" },
  { label: "58", value: "58" },
  { label: "59", value: "59" },
  { label: "60", value: "60" },
  { label: "61", value: "61" },
  { label: "62", value: "62" },
  { label: "63", value: "63" },
  { label: "64", value: "64" },
  { label: "65", value: "65" },
  { label: "66", value: "66" },
  { label: "67", value: "67" },
  { label: "68", value: "68" },
  { label: "69", value: "69" },
  { label: "70", value: "70" },
  { label: "71", value: "71" },
  { label: "72", value: "72" },
  { label: "73", value: "73" },
  { label: "74", value: "74" },
  { label: "75", value: "75" },
  { label: "76", value: "76" },
  { label: "77", value: "77" },
  { label: "78", value: "78" },
  { label: "79", value: "79" },
  { label: "80", value: "80" },
  { label: "81", value: "81" },
  { label: "82", value: "82" },
  { label: "83", value: "83" },
  { label: "84", value: "84" },
  { label: "85", value: "85" },
  { label: "86", value: "86" },
  { label: "87", value: "87" },
  { label: "88", value: "88" },
  { label: "89", value: "89" },
  { label: "90", value: "90" },
  { label: "91", value: "91" },
  { label: "92", value: "92" },
  { label: "93", value: "93" },
  { label: "94", value: "94" },
  { label: "95", value: "95" },
  { label: "96", value: "96" },
  { label: "97", value: "97" },
  { label: "98", value: "98" },
  { label: "99", value: "99" },
  { label: "100", value: "100" },
  { label: "101", value: "101" },
  { label: "102", value: "102" },
  { label: "103", value: "103" },
  { label: "104", value: "104" },
  { label: "105", value: "105" },
  { label: "106", value: "106" },
  { label: "107", value: "107" },
  { label: "108", value: "108" },
  { label: "109", value: "109" },
  { label: "110", value: "110" },
  { label: "111", value: "111" },
  { label: "112", value: "112" },
  { label: "113", value: "113" },
  { label: "114", value: "114" },
  { label: "115", value: "115" },
  { label: "116", value: "116" },
  { label: "117", value: "117" },
  { label: "118", value: "118" },
  { label: "119", value: "119" },
  { label: "120", value: "120" },
  { label: "121", value: "121" },
  { label: "122", value: "122" },
  { label: "123", value: "123" },
  { label: "124", value: "124" },
  { label: "125", value: "125" },
  { label: "126", value: "126" },
  { label: "127", value: "127" },
  { label: "128", value: "128" },
  { label: "129", value: "129" },
  { label: "130", value: "130" },
  { label: "131", value: "131" },
  { label: "132", value: "132" },
  { label: "133", value: "133" },
  { label: "134", value: "134" },
  { label: "135", value: "135" },
];

export default function ageDropdown() {
  const [value, setValue] = useState(null);

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
      placeholder="Age"
      value={value}
      onChange={(item) => {
        setValue(item.value);
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
    marginLeft: 10,
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
