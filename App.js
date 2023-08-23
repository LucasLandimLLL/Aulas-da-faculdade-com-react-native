import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } 
from 'react-native';
import MeuComponente from './componentes/MeuComponente';



export default function App() {
  return (
    <View style={styles.container}>
  <MeuComponente />
      <Text>O bruno é gay</Text>
      <Text>O bruno é muito gay</Text>
      <Text>O bruno pare de ser muito gay</Text>
      <Text>tigas amigo do bruno logo os dois são gays</Text>
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
