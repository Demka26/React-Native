import React from "react";
import { View, Text,}from 'react-native';
import { StyleSheet } from "react-native";
import {FONTS, COLORS, SIZES} from "../constants/theme";
import styles from "../assets/Style";

const FooterTotal=({subTotal,shippingfee,total})=>{
    return(
        <View
            style={styles.footerTotalContainer}>
            <View
                style={{
                    flexDirection:'row'
                }}>
                <Text style={{flex:1,...FONTS.body3}}>Subtotal</Text>
                <Text style={{...FONTS.h3}}>${subTotal.toFixed(2)}</Text>
            </View>
            <View
                style={styles.footerTotalInnerContainer}>
                <Text style={{flex:1,...FONTS.body3}}>Shipping Fee</Text>
                <Text style={{...FONTS.h3}}>${shippingfee.toFixed(2)}</Text>
            </View>
            <View
                style={{flexDirection:'row',marginTop: SIZES.base}}>
                <Text style={{flex:1,...FONTS.h2}}>Total</Text>
                <Text style={{...FONTS.h2}}>${total.toFixed(2)}</Text>
            </View>

        </View>
    )
}


export default FooterTotal;