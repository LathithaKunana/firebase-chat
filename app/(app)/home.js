import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'

export default function Home() {
    const {logout, user} = useAuth();
    const handleLogout = async() => {
        await logout();
    }
    console.log('Got the user: ', user)
    return (
        <View className = "flex-1 bg-white">
        <Text>Home</Text>
            <Button title='Sign Out' onPress={handleLogout} />
        </View>
    )
}