import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FONTS } from "../constants/theme";
import styles from "../assets/Style";

// 2. add style. -> numberOfLines={1} if text is large - make is shorter. (only 1 row)

const FoodItem = (props) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity  onPress={props.onSelectFood} style={{marginBottom:20}}>
        <View>
          <Image source={{ uri: props.image }} resizeMode="cover" style={styles.foodItemImage}/>
              <View style={styles.foodItemPriceContainer}>
                <Text>{props.price}$</Text>

              </View>
      
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{...FONTS.body2}}>{props.title}</Text>
        </View>
      </TouchableOpacity>
  </View>
  );
};

export default FoodItem;