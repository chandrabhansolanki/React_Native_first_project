import React from "react"
import { StyleSheet, Text, View, Linking, TextInput, TouchableOpacity } from 'react-native';

const SignUp = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.header}>Getting Started</Text>
            <Text style={styles.create}>Create an account to continue</Text>
            <View>
                <View style={{position:"relative"}}>
                    <Text style={{position:"absolute"}}>Name</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <Text>Email</Text>
                <TextInput style={styles.textInput}></TextInput>
                <Text>Password</Text>
                <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.touchableContainer}>
                <TouchableOpacity style={styles.SignUpButton}><Text style={{ color: "white" }}>Sign Up</Text></TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '300', marginBottom: 10 }}>---- Or sign Up with ----</Text>
                <TouchableOpacity style={styles.googleButton}><Text style={{ fontSize: 16 }}>Continue with Google</Text></TouchableOpacity>
                <TouchableOpacity style={styles.googleButton}><Text style={{ fontSize: 16 }}>Continue with Facebook</Text></TouchableOpacity>
                <Text style={{ marginTop: 110 }}>Aleady have an account? Sign In</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({


    container: {
        marginLeft: 20,
        marginRight: 20
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
        height: 40,
        width: "100%",
        borderWidth: 2,
        marginBottom: 25,
        borderRadius: 6,
        paddingLeft: 10,
        borderColor: "#ececec",
        fontSize: 18
    },
    touchableContainer: {
        marginTop: 10,
        alignItems: "center", // ignore this - we'll come back to it
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
        // padding: 12,
        alignItems: "center",
        width: "100%",
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 16,
        paddingBottom: 16,
        borderColor: "#6e3cbc",
    }


})
export default SignUp