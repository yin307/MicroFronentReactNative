

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../Button';
import TextBase from '../component/TextBase';
import NavigationService from '../NavigationService';


export default class LoginBase extends React.Component<{}, {}>{
    render(): React.ReactNode {
        return (
            <View style={{}}>

                <TextBase children={'this is login page of user name:'} />
                <Button onPress={() => {
                    console.log('asdasdsdsadadassad');
                    NavigationService.navigate('LoginSuccessScreen', {});
                }} />
                
            </View>
        )
    }
}