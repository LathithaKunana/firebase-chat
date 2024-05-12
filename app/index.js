import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  return (
    
    <View className = "flex-1 justify-center items-center">
      <ActivityIndicator size={"large"} color={"gray"} />
    </View>
  )
}