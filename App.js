import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Component/SignUp/SignUp';
import SignIn from './Component/SignIn/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <SignUp/>
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
      
      </Stack.Navigator>
    </NavigationContainer>
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
