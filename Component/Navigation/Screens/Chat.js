import React from "react"
import {View, Text} from "react-native"

const Chat = () => {
    return(
        <View>
            <Text onPress={()=>alert("these is chat page")}>Chat</Text>
        </View>
    )
}

export default Chat