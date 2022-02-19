import React, { useContext, useState } from "react";
import { View, Text,Image,StyleSheet, TextInput} from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view";
import icons, {icon} from "../constants/icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header,IconButton, CartQuantityButton,FooterTotal,TextButton } from "../components";
import {FONTS, COLORS, SIZES} from "../constants/theme";
import { globalValue } from "../App";
// import styles from "../assets/Style";


const CartScreen =({navigation})=>{
    
    const {list,add,remove,reset}=useContext(globalValue);

    const coupons = [
      {
          "name": 'DemiG',
          "discount": 0.7
      },
      {
          "name": 'Siga',
          "discount": 0.25
      },
      {
          "name": 'Basti',
          "discount": 0.3
      },
      {
        "name": 'Raya',
        "discount": 0.9
    }
  ]
    const [input,setInput] = useState('');
    
    const couponCheck =(coupon)=>{
      if(coupon!==undefined){
        for(const item of coupons)
          if(item.name===coupon){
            setPriceTotal(priceTotal-(item.discount*priceTotal))
            return;
          }
        }
      alert("The coupon you entered is not valid, please enter a valid coupon")
    }

    const [priceTotal,setPriceTotal] = useState(0);
    const [flagPrice, setFlagPrice]= useState(true);

    const checkPrice =()=>{
      let sum = 0;
      for(const item of list){
        if(item!= undefined){
          sum += (item.price)
        }
      }
      if(list.length==0) setPriceTotal(0)
      else{
        setPriceTotal(sum);
        setFlagPrice(false);

      }  
    }
    if(flagPrice) checkPrice()

    function removeMyCartHandler(data){
      
      for (const item of list) {
        if(item===data){
          remove(data)
          if(list.length==0){
            setPriceTotal(0)
          }
          else
          setPriceTotal(priceTotal-data.price)
        }  
      } 
    }

    function renderHeader(){
        return(
          <Header
          title="MY CART"
          containerStyle={styles.headerCartStyle}
          leftComponent={
            <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent:'center',
              alignItems: 'center',
              borderWidth:1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.lightOrange2,
    
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2
            }}
            onPress={()=>navigation.goBack()}
            />
          }
          rightComponent={
            <CartQuantityButton
            onPress={()=>{navigation.navigate("cartScreen")}}
            quantity={list.length}/>
    
          }
          />
        )
      }
      function renderCartList(){
        return(
            <SwipeListView
                data={list}
                keyExtractor={item=>`${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.padding,
                    paddingHorizontal:SIZES.padding,
                    paddingBottom:SIZES.padding*2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data,rowMap)=>(
                    <View style={{
                        height:100,
                        backgroundColor:COLORS.lightGray2,
                        ...styles.cartItemContainer
                    }}>
                        <View style={{flex:1}}>
                            <Text style={{...FONTS.body3}}>{data.item.title}</Text>
                            <Text style={{color:COLORS.primary,...FONTS.h3}}>${data.item.price}</Text>

                        </View>
                     
                    </View>
                    
                )}
               renderHiddenItem={(data,rowMap)=>(
                 <IconButton
                    containerStyle={{
                      flex:1,
                      justifyContent:'flex-end',
                      backgroundColor:COLORS.primary,
                      ...styles.cartItemContainer
                    }}
                    icon={icons.delete_icon}
                    iconStyle={{
                      marginRight:10
                    }}
                    onPress={()=>removeMyCartHandler(data.item)}
                 />
               )}
                
            />

        )
      }


    return(
      
        <View
        style={{
            flex: 1,
            backgroundColor:COLORS.white
            }}>
              
            {renderHeader()}
       
            {renderCartList()}
            
            <View
               style={{
                padding:20,
                borderWidth: 1,
                borderColor:COLORS.lightGray1,
               }}>
                 <Text style={{...FONTS.h3}}>Add Coupon:</Text>
              <TextInput 
                style={{  
                    marginTop:10,
                    padding:15,
                    marginLeft:5,
                    borderRadius:10,
                    paddingRight:30,
                    borderWidth:2,
                    borderColor:COLORS.lightGray2,
                    backgroundColor:COLORS.white,
                    overflow:'hidden'}}
                placeholder="Enter your Coupon"
                onChangeText={text=>setInput(text)}
                onSubmitEditing={()=>{couponCheck(input)}}
              />
            </View>
           

             <FooterTotal
              subTotal={priceTotal}
              shippingfee={3}
              total={priceTotal+3}
            />
           
                <TextButton
                label="To checkout"
                buttonContainerStyle={{
                    height:55,
                    paddingHorizontal: SIZES.radius,
                    marginLeft: SIZES.radius,
                    marginRight: SIZES.radius,
                    marginBottom:SIZES.padding,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.primary
                }}
                onPress={()=>navigation.navigate("Payment")}
                />
                
        </View>
    );
}

const styles= StyleSheet.create({
    cartItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius:SIZES.radius
    }
})

export default CartScreen;