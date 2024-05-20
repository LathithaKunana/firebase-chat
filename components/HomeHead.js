import { View, Text, Platform } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "../utilities/common";
import { useAuth } from "../context/authContext";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from "./CustomMenuItems";
import { Feather } from "@expo/vector-icons";

const ios = Platform.OS == "ios";
export default function HomeHead() {
  const { top } = useSafeAreaInsets();
  const {logout , user } = useAuth();

  const handleProfile = () => {
    //handling the profile
  }

  const handleLogout = async() => {
      await logout();
  }
  return (
    <Vie
      style={{ paddingTop: ios ? top : top + 10, backgroundColor: "#006F5E" }}
      className="flex-row justify-between items-center px-5 pb-6 rounded-b-xl shadow-md"
    >
      <View>
        <Text style={{ fontSize: hp(3.5) }} className="font-medium text-white">
          Chats
        </Text>
      </View>
      <View>
        <Menu>
          <MenuTrigger customStyles={{
            triggerWrapper: {
                //tigger
            }
          }}>
            <Image
            style={{ height: hp(5.3), aspectRatio: 1, borderRadius: 100 }}
            source={user?.profileUrl}
            placeholder={{ blurhash }}
            transition={500}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
               opptionsContainer: {
                borderRadius: 10,
                borderCurve: 'continuous',
                marginTop: 40,
                marginLeft: -30,
                backgroundColor: 'white'
               }
              }}>
            <MenuItem
                text='Profile'
                action={handleProfile}
                value={null}
                icon={<Feather name="user" size={hp(2.5)} color="#737373" />} 
            />
            <Divider />
            <MenuItem
                text='Sign Out'
                action={handleLogout}
                value={null}
                icon={<Feather name="log-out" size={hp(2.5)} color="red" />} 
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

const Divider = () => (
    <View className = "p-[1px] w-full bg-neutral-200" />
)
