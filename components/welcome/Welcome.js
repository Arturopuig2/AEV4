import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Manuel',
      apellido: 'Vidal',
      edad: 29,
    };
  }
  render() {
    return (
      <View>
        <Text>
          Hola, {this.state.nombre} {}
          {this.state.apellido} {}
          {this.state.edad}
        </Text>
      </View>
    );
  }
}
