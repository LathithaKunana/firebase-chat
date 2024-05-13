import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';


export default function SignIn() {
  return (
    <View className='flex-1 '>
      <StatusBar style='dark' />
      <View style={{paddingTop: hp(8)}} className="flex-1 space-y-12">
        {/* signIn image */}
        <View className="items-center">
          <Image style={{height: hp(25)}} resizeMode='contain' source={require('./../assets/images/login.png')} />
        </View>


        <View className="space-y-8 items-center " >
          <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
          <View className="space-y-4">
            {/* inputs */}
            <View style={{height:hp(7), width:hp(40)}} className="flex-row space-x-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name='mail' size={hp(2.7)} color={"gray"} />
              <TextInput
                  style={{fontSize: hp(2)}}
                  className="flex-1 font-semibold text-neutral-700 justify-center"
                  placeholder='Email address'
                  placeholderTextColor={'gray'}
              />    
            </View>
            <View className="space-y-3">
              <View style={{height:hp(7), width:hp(40)}} className="flex-row space-x-4 px-4 bg-neutral-100 items-center rounded-2xl">
                <Octicons name='lock' size={hp(2.7)} color={"gray"} />
                <TextInput
                    style={{fontSize: hp(2)}}
                    className="flex-1 font-semibold text-neutral-700 justify-center"
                    placeholder='Password'
                    placeholderTextColor={'gray'}
                />    
              </View>
            </View>
            <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-500">Forgot password</Text>

            {/* submit button */}
            <TouchableOpacity style={{height: hp(6.5), backgroundColor: "#006F5E"}} className="rounded-xl justify-center items-center">
              <Text style={{fontSize: hp(2.7)}} className = "text-white font-bold tracking-wider">Sign In</Text>
            </TouchableOpacity>

            {/* sign up text */}

            <View className=" flex-row justify-center">
              <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">Dont have an account? </Text>
              <Pressable>
                <Text style={{fontSize: hp(1.8), color: "#006F5E"}} className="font-bold">Sign Up </Text>
              </Pressable>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}