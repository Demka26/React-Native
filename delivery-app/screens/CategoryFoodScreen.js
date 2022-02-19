import React ,{useContext}from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import {globalValue} from "../App";
import { FOODS } from "../data/dummy-data";
// 1. import:
import FoodItem from "../components/FoodItem";
import icons, {icon} from "../constants/icons";
import { CartQuantityButton,IconButton,Header } from "../components";
import {FONTS, COLORS, SIZES} from "../constants/theme";
import styles from "../assets/Style";

const CategoryFoodScreen=({ route, navigation })=> {
  const { categoryId } = route.params;
  // Array of all foods - connected to that Category!
  const displayedFoods = FOODS.filter(food => food.categoryIds.indexOf(categoryId) >= 0);
  const {list,add,remove,reset}=useContext(globalValue);

  // 2. Call FoodItem:
  const renderFoodItem = ({ item }) => {
    return (
      <FoodItem
        title={item.title}
        price = {item.price}
        onSelectFood={() => {
          navigation.navigate("FoodDetail",{foodId: item.id, foodName: item.title});
        }}
        image = {item.imgUrl}
      />
    )
  }
  function renderHeader(){
    return(
      <Header
      title="FOODS"
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
  return (
    <View style={styles.categoryFoodContainer}>
      {renderHeader()}
      <Text style={{...FONTS.h3}}>4  Items</Text>
      <FlatList
      data={displayedFoods}
      keyExtractor={item => item.id}
      renderItem={renderFoodItem}
      style={{width:'100%'}}
      />
    </View>
  );
}

export default CategoryFoodScreen;

