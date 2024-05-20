import { View, Text, Platform, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const ios = Platform.OS == 'ios';

export default function CustomKeyboardView({children, inChat}) {
    let kavConfig = {};
    let ScrollViewConfig = {};
    if(inChat){
        kavConfig= {keyboardVerticalOffset: 90};
        ScrollViewConfig = {contentContainerStyle: {flex: 1}};
    }
  return (
    <KeyboardAvoidingView
        behavior={ios? 'padding': 'height'}
        style={{flex: 1}}
        {...kavConfig}
    >
        <ScrollView
            style={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
            {...ScrollViewConfig}
        >
            {
                children
            }

        </ScrollView>
    </KeyboardAvoidingView>
  )
}