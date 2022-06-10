import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

guardaDNI=(valor)=>{
  if(valor.lenght===8){
    this.state({DNI:valor});

    
  }
}

export default class Tarjeta extends Component {
  render() {
    return (
      <View>
        <TextInput
          keyboardType="number-pad"
          maxLength={8}
          placeholderTextColor="red"
          label="Aquí el DNI"
          placeholder="8 DÍGITOS SIN LETRA"
          left={<TextInput.Icon name="account-arrow-right" />}
        />
      </View>
    );
  }
}
