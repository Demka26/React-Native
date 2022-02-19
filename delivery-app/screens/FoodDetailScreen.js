import React,{useContext} from "react";
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { FOODS } from "../data/dummy-data";
import {FONTS, COLORS, SIZES} from "../constants/theme";
import icons, {icon} from "../constants/icons";
import {Header,IconButton,CartQuantityButton,TextButton} from "../components/index";
import {globalValue} from "../App";
import styles from "../assets/Style";

const FoodDetailScreen = ({route,navigation})=>{
 
  const { foodId } = route.params;
  const currFood = FOODS.find(food => food.id === foodId);
  let [qty,setQty]= React.useState(0)
  const {list,add,remove,reset}=useContext(globalValue);

  let addItemToCart=(data)=>{
    add(data);
    setQty(++qty)

  }
  function renderHeader(){
    return(
      <Header
      title="DETAILS"
      containerStyle={styles.headerCartStyle}
      leftComponent={
        <IconButton
        icon={icons.back}
        containerStyle={styles.cartIconHeader}
        iconStyle={{width: 20,height: 20,tintColor: COLORS.gray2}}
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
function renderDetails(){
  return(
    <View style={styles.detailsContainer}>
      <View style={{
        justifyContent:'center',
        alignItems:'center'
      }}> 
        <Text style={{textAlign:"center",...FONTS.h1}}>{currFood.title}</Text>
        <Image source={{ uri: currFood.imgUrl }} style={styles.detailsImage} /></View>
              <View>
                  <Text style={{marginTop:15, ...FONTS.body4}}>{currFood.description}</Text>
              </View>
              <View style={styles.details2}>
              <View style={{flexWrap:'wrap',marginLeft:5}}>
                  <Text style={{
                      color:'black',
                      ...FONTS.body3
                      }}>Size:  {currFood.size}
                  </Text>
                </View>
              </View>
              <View style={styles.details3}>
              <View style={{flexWrap:'wrap',marginLeft:5}}>
                  <Text style={{
                      color:'black',
                      ...FONTS.body3
                      }}>Shipping fee:  {currFood.delivery}$
                  </Text>
                </View>
            </View>
              <View style={styles.details3}>
              <View style={{flexWrap:'wrap',marginLeft:5}}>
                  <Text style={{
                      color:'black',
                      ...FONTS.body3
                      }}>Total price:  {currFood.delivery+currFood.price}$
                  </Text>
              </View>
            </View>
              <View style={styles.details4}>
             <View style={{marginLeft:5}}>
                <Text style={{
                    color:'black',
                    ...FONTS.body3
                   }}>Reviews:
                </Text>
              </View>
            <View style={styles.reviews}>
                  <Text style={{marginVertical:10,...FONTS.body4,color:COLORS.darkGray2}}>{currFood.review}</Text>
                </View>             
              </View>    
      </View>
  )
}

function renderFooter(){
  return(
    <View style={styles.addToCartContainer}>
      <TextButton
        buttonContainerStyle={styles.addToCartButton}
        label="Add to cart"
        label2={currFood.price}
        onPress={()=> {addItemToCart(currFood);alert("Item was added")}}
      />

    </View>
  )
};

  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>  
     {renderHeader()} 
     <ScrollView>
        {renderDetails()}
     </ScrollView>
      {renderFooter()}
    </View>

  )
}

export default FoodDetailScreen;


