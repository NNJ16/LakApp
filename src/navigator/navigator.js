import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "../screens/account/SignUp";
import SignIn from "../screens/account/SingIn";

const {Navigator, Screen}= createNativeStackNavigator();

const AppNavigator=()=>{
    return (
        <NavigationContainer>
          <Navigator initialRouteName= "SignIn">
            <Screen name="SignIn" component={SignIn} />
          </Navigator>
        </NavigationContainer>
      );
}

export default AppNavigator;
