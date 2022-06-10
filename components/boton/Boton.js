import React, {Component} from 'react';
import {Button, Colors, TextInput} from 'react-native-paper';

const click = () => {
  console.log('HAS HECHO CLIC');
};

export default class Boton extends Component {
  render() {
    return (
      <Button icon="format-list-bulleted" mode="contained" onPress={click}>
        LISTA DE INFORMES
      </Button>
    );
  }
}
