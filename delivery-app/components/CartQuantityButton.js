import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import icons from "../constants/icons";
import { StyleSheet } from "react-native";
import {FONTS, COLORS, SIZES} from "../constants/theme";
import styles from "../assets/Style";

const CartQuantityButton =({containerStyle,iconStyle,quantity,onPress})=>{
    return(
        <TouchableOpacity style={{...containerStyle},styles.cartButton}
        onPress={onPress}
        >
            <Image  
            source={icons.cart}
            style={{...iconStyle },styles.cartImage}
            />
            <View style={styles.cartQuantity}>
                <Text style={styles.cartQuantityText}>{quantity}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default CartQuantityButton;