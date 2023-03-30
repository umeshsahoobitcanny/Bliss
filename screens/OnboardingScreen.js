import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Lottie from 'lottie-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../assets/images/misc/gaming.svg';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
          }}>
          BLISS
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Lottie
          source={require('../assets/welcome.json')}
          autoPlay
          loop
          style={{width: 240, height: 250, transform: [{rotate: '-2  deg'}]}}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
