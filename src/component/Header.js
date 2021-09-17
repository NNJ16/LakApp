import React from "react";
import { View,Text, StyleSheet } from "react-native";

const Header = ()=>{
  return(
    <View style={style.container}>
      <Text style={style.text}>Hello World</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    
    text:{
      color:'darkslateblue',
      fontSize:30,
    }
});

export default Header;
