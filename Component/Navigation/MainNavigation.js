import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { home, homeActive, trade, tradeActive, market, marketActive } from "../utils/utils"
import { Image } from "react-native"
import Chat from "./Screens/Chat"
import Profile from "./Screens/profile"
import Home from './Screens/Home'

const MainNaviagtion = () => {

    // const home = require('../../assets/home.png')
    // const homeActive = require("../../assets/homeActive.png")

    // const chatName = "chat"
    // const profileName = "profile"
    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false , tabBarStyle:{
            // backgroundColor: '#6E3CBC'
        }}} >
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={focused ? homeActive : home} />
                ),
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={focused ? marketActive : market} />
                ),
            }} name="Chat" component={Chat} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={focused ? tradeActive : trade} />
                ),
            }} name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
export default MainNaviagtion