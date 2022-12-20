import { StatusBar } from "expo-status-bar";
import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const SignIn = ({ navigation }) => {
    return (
        <SafeAreaProvider style={styles.container} >
            <StatusBar />
            <Text style={styles.header}>Welcome Back</Text>
            <Text style={styles.create}>Sign in to your account</Text>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>

                <View style={{flexDirection: "row",justifyContent: "flex-end", marginBottom:50}}>
                    <TouchableOpacity>
                        <Text style={{ alignItems: "flex-end" , fontWeight:"200" }}>Forgot password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.touchableContainer}>
                <TouchableOpacity style={styles.SignUpButton}><Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>Sign In</Text></TouchableOpacity>
                <Text style={{ fontSize: 14, fontWeight: '300', marginBottom: 15 }}>---- Or Sign In With ----</Text>
                <TouchableOpacity style={styles.googleButton}><Text style={{ fontSize: 16 }}>Continue with Google</Text></TouchableOpacity>
                <TouchableOpacity style={styles.googleButton}><Text style={{ fontSize: 16 }}>Continue with Facebook</Text></TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text>Don't have an account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                    <Text style={{ color: "#6e3cbc" }}> Sign Up</Text>
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
        marginBottom: 44,
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

export default SignIn