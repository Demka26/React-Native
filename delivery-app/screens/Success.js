import React from "react";
import {Text,Image,View} from 'react-native';
import { TextButton } from "../components";
import {FONTS,SIZES,COLORS} from "../constants/theme";
import styles from "../assets/Style";

const Success =({navigation})=>{
    return(
        <View style={styles.successContainer}>
            <View 
            style={styles.successCenter}>
                <Image
                source={require('../assets/images/success.png')}
                resizeMode="contain"
                style={{width: 150,height:150}}
                />
                <Text style={{marginTop:SIZES.padding,...FONTS.h1}}>Congratulations!</Text>
                <Text style={{textAlign:'center',marginTop:SIZES.base, color:COLORS.darkGray2,...FONTS.body3}}
                >Payment was successfully made!</Text>
            </View>
            <TextButton
                label="Done"
                buttonContainerStyle={styles.doneButton}
                onPress={()=>navigation.navigate("iHungry")}/>
        </View>
    )

}

export default Success;