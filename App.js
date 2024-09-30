import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Prime from './src/Telas/Prime';
import CadNews from './src/Components/CadNews';

export default function App() {
  return (
    <ScrollView>
      {/* <Prime/> */}
      <CadNews/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}


