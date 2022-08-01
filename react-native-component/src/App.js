import React from "react";
import { Text, View, Button } from "react-native";

const App = () =>{
    return(
        <View
        style={{
            flex:1,
            backgroundColor:'#000',
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Text style={{fontSize:30, marginBottom:10, color:'#fff', }}> Button Component</Text>
            <Button title="Button" onPress={()=> alert('click!!!')}></Button>
        </View>
    )
}


export default App;