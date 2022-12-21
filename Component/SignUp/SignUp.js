import { StatusBar } from "expo-status-bar";
import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const SignUp = ({ navigation }) => {

    const googlebutton = () => {
        Linking.openURL("https://www.google.co.in/")
    }
    const facebookbutton = () => {
        Linking.openURL("https://www.facebook.com/")
    }
    return (
        <SafeAreaProvider style={styles.container} >
            <StatusBar />
            <Text style={styles.header}>Getting Started</Text>
            <Text style={styles.create}>Create an account to continue</Text>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
            </View>
            <View style={styles.touchableContainer}>
                <TouchableOpacity style={styles.SignUpButton}><Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>Sign Up</Text></TouchableOpacity>
                <Text style={{ fontSize: 14, fontWeight: '300', marginBottom: 15 }}>---- Or Sign Up With ----</Text>
                <TouchableOpacity style={styles.googleButton} onPress={googlebutton}><Text style={{ fontSize: 16 }}>Continue with Google</Text></TouchableOpacity>
                <TouchableOpacity style={styles.googleButton} onPress={facebookbutton}><Text style={{ fontSize: 16 }}>Continue with Facebook</Text></TouchableOpacity>
               
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <Text>Already have an account ?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("signin")}>
                <Text style={{color:"#6e3cbc"}}> Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    header: {
        fontSize: 32,
        fontWeight: '400',
    },
    create: {
        marginTop: 10,
        marginBottom: 36,
        fontSize: 20,
        fontWeight: '200',
    },
    textInput: {
        height: 60,
        width: "100%",
        borderWidth: 1,
        marginBottom: 25,
        borderRadius: 6,
        paddingLeft: 10,
        borderColor: "#ececec",
        fontSize: 18
    },
    touchableContainer: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: "center",
    },
    SignUpButton: {
        backgroundColor: "#6e3cbc",
        padding: 12,
        width: "100%",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 25,
    },
    googleButton: {

        alignItems: "center",
        width: "100%",
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 18,
        borderColor: "#6e3cbc",
    },
    inputContainer: {
        position: "relative"
    },
    inputLabel: {
        fontSize: 16,
        position: "absolute",
        left: 16,
        top: -9,
        backgroundColor: "white",
        paddingHorizontal: 10,
        fontWeight: "bold",
        zIndex: 1
    }

})
export default SignUp