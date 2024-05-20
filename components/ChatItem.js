import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import {blurhash} from '../utilities/common'

export default function ChatItem({ item, router, noBorder }) {
  const openChatRoom = () => {
    router.push({pathname: '/chatRoom', params: item});
  }
  return (
    <TouchableOpacity
      onPress={openChatRoom}
      className={`flex-row justify-between items-center mx-4 pb-2 space-x-3 mb-4  ${
        noBorder ? "" : "border-b border-b-neutral-200"
      }`}
    >
      <Image
        source={item?.profileUrl}
        style={{ height: hp(6), width: hp(6), borderRadius: 100 }}
        placeholder={blurhash}
        transition={500}
      />
      {/* name and last message */}
      <View className="flex-1 space-y-1">
        <View className="flex-row justify-between ">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            {
              item?.username
            }
          </Text>
          <Text
            style={{ fontSize: hp(1.6) }}
            className="font-medium text-neutral-500 "
          >
            Time
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(1.6) }}
          className="font-medium text-neutral-500"
        >
          Last message
        </Text>
      </View>
    </TouchableOpacity>
  );
}
