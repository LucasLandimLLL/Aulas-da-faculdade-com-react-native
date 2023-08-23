import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } 
from 'react-native';
import MeuComponente from './componentes/MeuComponente';



export default function App() {
  return (
    <View style={styles.container}>
  <MeuComponente />
      <Text>não sei dizer o que mudou</Text>
      
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
