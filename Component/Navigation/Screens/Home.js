// import { StatusBar } from "expo-status-bar";
import React from "react"
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
    let map = require('../../../assets/map.png')


    const data = [
        {
            source: require("../../../assets/car.jpeg")
        },
        {
            source: require("../../../assets/car.jpeg")
        },
        {
            source: require("../../../assets/car.jpeg")
        }
    ]

    const renderItem = ({ item }) => {
        return <Image style={{marginHorizontal:5, width:280,borderRadius:16, height:100}} source={item.source} />

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.header} >
                <View >
                    <Text style={{ color: "#6E3CBC", fontSize: 20, marginBottom: 16 }}>Good Morning,</Text>
                    <Text style={styles.headerText}>What do you want</Text>
                    <Text style={styles.headerText}>to experience</Text>
                    <Text style={styles.headerText}>today?</Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="face-man-profile" size={50} color="black" />
                </View>
            </View>
            <View style={{ marginBottom: 12 }}>
                <TextInput placeholder="Search Location" style={styles.searchBar}></TextInput>
                <Image source={map} style={{ height: 180, width: "100%", marginBottom: 20, borderRadius: 16 }} />
                <TouchableOpacity style={styles.CarButton}>
                    <View>
                        <Text style={{ color: "white" }}>Book a Car</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 14,marginBottom:10 }}>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>Promotion</Text>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>See All</Text>
            </View>
            <View>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
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
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 25
    },
    CarButton: {
        backgroundColor: "#6e3cbc",
        height: 50,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: "center"
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