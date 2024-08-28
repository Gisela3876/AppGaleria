import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View, Text, StyleSheet} from 'react-native';
import Gatito from './Componentes/Gatito';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galeria gatitos</Text>
      <ScrollView>
      <Gatito nombre='Gatitos lindos '
      imagen={require('./Imagenes/Img1.jpg')}></Gatito>
      <Gatito nombre='Gatito de lindo'
      imagen={require('./Imagenes/Img2.jpg')}></Gatito>
      <Gatito nombre='Gatito con bonito'
      imagen={require('./Imagenes/Img3.jpg')}></Gatito>
      <Gatito nombre='Gatito 7w7'
      imagen={require('./Imagenes/Img4.jpg')}></Gatito>
      <Gatito nombre='Gatito Jupi'
      imagen={require('./Imagenes/Img5.jpg')}></Gatito>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText:{
    fontSize:25,
    fontWeight:'Comfortaa',
    color:'blue',
  },
});