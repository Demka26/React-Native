import React from "react";
// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens:
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryFoodScreen from "../screens/CategoryFoodScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import CartScreen from "../screens/CartScreen";
import Success from "../screens/Success";
import Payment from "../screens/Payment";


const Stack = createNativeStackNavigator();

export default function FoodsNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="iHungry" component={CategoriesScreen} />
     
      <Stack.Screen
        name="CategoryFood"
        component={CategoryFoodScreen}
        options={({ route }) => ({ title: route.params.categoryName })}
      />
      <Stack.Screen 
      name="FoodDetail" 
      component={FoodDetailScreen}
      options={({ route }) => ({ title: route.params.foodName })}
       />
       <Stack.Screen 
      name="cartScreen" 
      component={CartScreen}
       />
       <Stack.Screen 
      name="Success" 
      component={Success}
       />
       <Stack.Screen 
      name="Payment" 
      component={Payment}
       />
       
    </Stack.Navigator>
     
  </NavigationContainer>
    

  );
}


