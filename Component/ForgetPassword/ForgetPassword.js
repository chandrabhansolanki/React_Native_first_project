import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ForgetPassword = () => {
    return (
        <SafeAreaProvider style={styles.container} >
            <StatusBar />
            <Text style={styles.header}>Forgot Password</Text>
            <Text style={[styles.create]}>Select which contact details should</Text>
            <Text style={[styles.create,{marginBottom:45,marginTop:-1}]}>we use to reset your password</Text>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.textInput} placeholder="Send to your email"></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Phone Number</Text>
                    <TextInput keyboardType='numeric' style={styles.textInput} placeholderTextFontSize='2' placeholder="Send to your phone number"></TextInput>
                </View>
            </View>
            <View style={[styles.touchableContainer,{marginTop:350}]}>
                <TouchableOpacity style={styles.ContinueButton}><Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>Continue</Text></TouchableOpacity>
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
        fontSize: 18,
        fontWeight: '100',
    },
    textInput: {
        height: 60,
        width: "100%",
        borderWidth: 1,
        marginBottom: 25,
        borderRadius: 6,
        paddingLeft: 24,
        borderColor: "#ececec",
        fontSize: 14
    },
    touchableContainer: {
        flex: 1,
        justifyContent:"center",
        marginTop: 10,
        marginBottom: 20,
        alignItems: "flex-end",
    },
    ContinueButton: {
        backgroundColor: "#6e3cbc",
        padding: 12,
        width: "100%",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 25,
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

export default ForgetPassword