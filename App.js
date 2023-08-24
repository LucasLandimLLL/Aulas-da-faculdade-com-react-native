import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } 
from 'react-native';
import MinMax from './componentes/MinMax';
import NumeroAleatorio from './componentes/semana2/NumeroAleatorio';


export default function App() {
  return (
    <View style={styles.container}>
      <MinMax min = "20" max = '40'/>
      <NumeroAleatorio  min = "20" max = '6778' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
