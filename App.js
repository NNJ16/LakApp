import React from "react";
import SignUp from "./src/screens/account/SignUp";
import LandingScreen from "./src/screens/landing/Landing";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostAds from "./src/screens/Detailes/detailes";
import { NativeRouter, Switch, Route } from "react-router-native";
import { StyleSheet, View } from "react-native";
import DetailScreen from "./src/screens/Detailes/detailes";
import AdsImages from "./src/screens/adsImage/adsImage";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    // <NativeRouter>
    //     <View style={styles.container}>
    //       <Switch>
    //         <Route exact path="/" component={PostAds} />
    //         <Route exact path="/postAds" component={PostAds} />
    //       </Switch>
    //     </View>
    //   </NativeRouter>
    // <LandingScreen/>
    // <DetailScreen />
    <AdsImages />
    // <SignUp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;