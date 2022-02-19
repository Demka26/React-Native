import React from "react";
import {View, Text} from "react-native";
import { FONTS } from "../constants/theme";
import styles from "../assets/Style";

const Header =({
    constainerStyle,
    title,
    titleStyle,
    leftComponent,
    rightComponent

}) =>{
    return(
        <View style={{...constainerStyle}, styles.headerContainerStyle}>
            {
                leftComponent
            }
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{...FONTS.h3,...titleStyle}}>{title}</Text>
            </View>
            {rightComponent}

        </View>
    )
}
export default Header;