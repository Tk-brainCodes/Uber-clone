import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const data: {
  id: string;
  title: string;
  image: string;
  screen: string;
}[] = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.id}
      data={data}
      renderItem={({ item }) => {
        const { image, screen, title } = item;
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(screen)}
            style={tw` flex flex-col items-center justify-center pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-65`}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: image }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                type='antdesign'
                color='white'
                name='arrowright'
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
