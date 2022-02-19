import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { FONTS } from "../constants/theme";
import styles from "../assets/Style";

// in Text -> change to props.title
const CategoryGridTile = (props) => {
  return (
      <View style={{flexDirection:'row',height: 150}}>
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
          <View style={styles.container}>
                <ImageBackground source={{uri: props.image}} resizeMode="contain" style={styles.bgImage}></ImageBackground>
                <Text style={{...FONTS.body3}}>{props.title}</Text>
          </View>
        </TouchableOpacity>
    </View>
  
  );
};



export default CategoryGridTile;