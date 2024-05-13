import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';


export default function SignUn() {
  const router = useRouter();
  const [loading, setloading] = useState(false)

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async() => {
    if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
      Alert.alert('Sign Up', 'Please fill all the fields.')
    }

    //register process
  }

  return (
    <CustomKeyboardView>
      <StatusBar style='dark' />
      <View style={{paddingTop: hp(9)}} className="flex-1 space-y-12">
        {/* signIn image */}
        <View className="items-center">
          <Image style={{height: hp(20)}} resizeMode='contain' source={require('./../assets/images/register.png')} />
        </View>


        <View className="space-y-8 items-center " >
          <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign Up</Text>
          <View className="space-y-4">
            {/* inputs */}
            <View style={{height:hp(7), width:hp(40)}} className="flex-row space-x-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Feather name='user' size={hp(2.7)} color={"gray"} />
              <TextInput
                  onChangeText={value => usernameRef.current=value}
                  style={{fontSize: hp(2)}}
                  className="flex-1 font-semibold text-neutral-700 justify-center"
                  placeholder='Username'
                  placeholderTextColor={'gray'}
              />    
            </View>

            <View style={{height:hp(7)}} className="flex-row space-x-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name='mail' size={hp(2.7)} color={"gray"} />
              <TextInput
                  onChangeText={value => emailRef.current=value}
                  style={{fontSize: hp(2)}}
                  className="flex-1 font-semibold text-neutral-700 justify-center"
                  placeholder='Email address'
                  placeholderTextColor={'gray'}
              />    
            </View>
            
              <View style={{height:hp(7)}} className="flex-row space-x-4 px-4 bg-neutral-100 items-center rounded-2xl">
                <Octicons name='lock' size={hp(2.7)} color={"gray"} />
                <TextInput
                    onChangeText={value => passwordRef.current=value}
                    style={{fontSize: hp(2)}}
                    className="flex-1 font-semibold text-neutral-700 justify-center"
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor={'gray'}
                />    
              </View>

              <View style={{height:hp(7)}} className="flex-row space-x-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Feather name='image' size={hp(2.7)} color={"gray"} />
              <TextInput
                  onChangeText={value => profileRef.current=value}
                  style={{fontSize: hp(2)}}
                  className="flex-1 font-semibold text-neutral-700 justify-center"
                  placeholder='Profile url'
                  placeholderTextColor={'gray'}
              />    
            </View>
            
            {/* submit button */}
            <View>
              {
                loading? (
                  <View className="flex-row justify-center">
                    <Loading size={hp(10)} />
                  </View>
                ):(
                  <TouchableOpacity onPress={handleRegister} style={{height: hp(6.5), backgroundColor: "#006F5E"}} className="rounded-xl justify-center items-center">
                    <Text style={{fontSize: hp(2.7)}} className = "text-white font-bold tracking-wider">Sign Up</Text>
                  </TouchableOpacity>
                )
              }
            </View>
            

            {/* sign up text */}

            <View className=" flex-row justify-center">
              <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">Already have an account? </Text>
              <Pressable onPress={() => router.push('signIn')}>
                <Text style={{fontSize: hp(1.8), color: "#006F5E"}} className="font-bold">Sign In </Text>
              </Pressable>
            </View>

          </View>
        </View>
      </View>
      </CustomKeyboardView>
  )
}