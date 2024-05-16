import { View, Text, Platform } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ios = Platform.OS == "ios"
export default function HomeHead() {
    const {top} = useSafeAreaInsets();

  return (
    <View style={{paddingTop:ios? top:top+10, backgroundColor: '#006F5E'}} className="flex-row justify-between px-5 pb-6 rounded-b-3xl shadow-md">
      <View>
        <Text style={{fontSize:hp(3)}} className="font-medium text-white">Chats</Text>
      </View>
    </View>
  )
}