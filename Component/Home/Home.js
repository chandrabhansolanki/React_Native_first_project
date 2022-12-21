// import { StatusBar } from "expo-status-bar";
import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
    return (


        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="red" />
            <View style={styles.header} >
                <View >
                    <Text style={{color:"#6E3CBC" ,fontSize:20, marginBottom:16}}>Good Morning,</Text>
                    <Text style={styles.headerText}>What do you want</Text>
                    <Text style={styles.headerText}>today?</Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="face-man-profile" size={50} color="black" />
                </View>
            </View>
            <View>
                <TextInput placeholder="Search Location" style={styles.searchBar}></TextInput>
                <TouchableOpacity style={styles.CarButton}>
                    <View>
                        <Text style={{  color: "white" }}>Book a Car</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:20,
    },
    headerText: {
        fontSize:25
    },
    CarButton: {
        backgroundColor: "#6e3cbc",
        height:50,
        borderRadius:6,
        alignItems:'center',
        justifyContent:"center"
    },
    searchBar: {
        height: 60,
        // width: "100%",
        borderWidth: 1,
        marginBottom: 25,
        borderRadius: 6,
        paddingLeft: 10,
        borderColor: "#ececec",
        fontSize: 18
    }
})
export default Home 