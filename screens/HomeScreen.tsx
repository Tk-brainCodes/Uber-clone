import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`flex flex-col items-start justify-center pl-2`}>
        <Image
          style={[tw`ml-2`,{ width: 100, height: 100, resizeMode: "contain" }]}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
