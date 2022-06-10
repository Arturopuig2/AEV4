import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, Colors, TextInput} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Boton from './components/boton/Boton';
import Tarjeta from './components/tarjeta/Tarjeta';
import Welcome from './components/welcome/Welcome';
const estilo = '';
// const DNI = '';
const isAdmin = true;
const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];
// const mostrarBotonInformes = () => {
//   return (
//     <Button icon="format-list-bulleted" mode="contained">
//       LISTA DE INFORMES
//     </Button>
//   );
// };
function nombre(nombreRecibido) {
  return <Text style={styles.fondo}>{nombreRecibido}</Text>;
}
const datos = datosRecibidos => {
  return (
    <View>
      <Text style={styles.fondo}>{datosRecibidos}</Text>
      <TextInput
        placeholderTextColor="red"
        label="Introduce tus datos"
        placeholder="Nombre"
        left={<TextInput.Icon name="account-arrow-right" />}
      />
      <TextInput
        label="Introduce tus datos"
        placeholder="Escribe aquí"
        placeholderTextColor="red"
        left={<TextInput.Icon name="eye" />}
      />
    </View>
  );
};
class App extends Component {
  render() {
    return (
      <>
        {/* <Welcome /> */}
        <View style={estilo === 'florida' ? styles.florida : styles.upv}>
          {nombre('Arturo Puig')}
          {/* {datos()} */}
          {/* <Tarjeta /> */}
          {datos('INTRODUCE DATOS A ENVIAR')}
          {isAdmin && <Boton />}
          <ScrollView>
            {modulos2Dam.map((item, pos) => {
              return (
                <View
                  style={pos % 2 === 0 ? styles.pares : styles.impares}
                  key={pos}>
                  <Text>{pos + 1}</Text>
                  <Text>{item.nombre}</Text>
                  <Text>{item.profesor}</Text>
                  <Text>{item.horas}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  impares: {
    backgroundColor: '#F8BBD0',
  },
  pares: {
    backgroundColor: '#F48FB1',
  },
  fondo: {
    backgroundColor: 'white',
  }
});

export default App;
