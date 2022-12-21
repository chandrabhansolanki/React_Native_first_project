// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,StatusBar } from 'react-native';
import SignUp from './Component/SignUp/SignUp';
import SignIn from './Component/SignIn/SignIn';
import Home from './Component/Home/Home';
import ForgetPassword from './Component/ForgetPassword/ForgetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <SignUp/>
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="forgetpassword" component={ForgetPassword} />
        <Stack.Screen name="home" component={Home} />
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
