import React, {useState,useContext} from "react";
import { StyleSheet, FlatList, View,Text,Image } from "react-native";
import {FONTS, COLORS, SIZES} from "../constants/theme";
import { CATEGORIES } from "../data/dummy-data";
import { CartQuantityButton,Header } from "../components";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import {globalValue} from "../App";

const fetchFonts = () => {
  Font.loadAsync({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold":require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"), 
  });
};


// 1. Import:
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const {list,add,remove,reset}=useContext(globalValue);

  if(!dataLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log(err)}
      />
    )
  }
  const renderGridItem = ({ item }) => {
    return (
      // change to CountryGridTile:
      <CategoryGridTile
        title={item.title}
        image = {item.imgUrl}
        onSelect={() => {
          navigation.navigate("CategoryFood", {
            categoryId: item.id,
            categoryName: item.title,
          });
        }}
      />
    );
  };
  function renderHeader(){
    return(
      <Header
      title="HOME"
      containerStyle={{
        height: 30,
        marginHorizontal: 20,
        marginTop: 20
      }}
      rightComponent={
        <CartQuantityButton
        onPress={()=>{navigation.navigate("cartScreen")}}
        quantity={list.length}/>

      }
      />
    )
  }
  return (
   <View>
     {renderHeader()}
     <Text style={{...FONTS.h1}}>Main</Text>
     <Text style={{...FONTS.h1}}>Categories</Text>
    <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        horizontal
        contentContainerStyle={{paddingVertical: 30}}
      />
      <View style={{
        marginTop:100,
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Image
                source={require('../assets/iHungry.png')}
                resizeMode="contain"
                style={{width: 150,height:150}}
                />
      {/* <Text>Powered by Demi Gelfond</Text> */}
      

    </View>
   </View>
  );
};


export default CategoriesScreen;