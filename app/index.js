import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  return (
    
    <View className = " bg-neutral-800  items-center justify-center">
      <Text>First screen</Text>
      <StatusBar style='dark'/>
    </View>
  )
}