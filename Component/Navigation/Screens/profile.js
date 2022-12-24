import React from "react"
import {View, Text} from "react-native"

const Profile = () => {
    return(
        <View>
            <Text onPress={()=>alert("these is chat page")}>Chat</Text>
        </View>
    )
}

export default Profile