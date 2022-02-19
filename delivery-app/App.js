
import React,{useState,useContext} from "react";
import FoodsNavigator from "./navigation/FoodsNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FOODS } from "./data/dummy-data";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const fetchFonts = () => {
  Font.loadAsync({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold":require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"), 

  });
};

export const globalValue= React.createContext();

const App=()=> {

  const [list,setCartList]= useState([]);
  let [qty,setQty]= React.useState(0)

  function add(newItem){
    setCartList([...list,newItem])
  }

  function remove(oldItem){
    if(oldItem.id !== FOODS.id)
      setCartList(list.filter(item=>oldItem.id!==item.id));
  }

  function reset(){
    setCartList([]);
  }
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log(err)}
      />
    )
  }
  
  return(

    <globalValue.Provider value={{list,add,remove,reset}}>
      <FoodsNavigator/>

    </globalValue.Provider>
    
  );
}
export default App;

