import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Component/SignUp/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 75,
  // flex: 1,
  //   backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
