import React, { memo } from "react";
import {  Text, View, TouchableOpacity } from "react-native";


const CustomerRow = memo(({id, name, email, role}) => {
    return(
    <View key={id} style={{flex:1, flexDirection:'row', height:40, justifyContent:'flex-start'}}>
        <View style={{backgroundColor:'#e8f2fb', height: 40, width: 40, justifyContent:'center'}}>
            <Text style={{textAlign:'center', fontSize: 20, color: '#0171cd'}}>{`${name.charAt(0)}`}</Text>
        </View>
        <View style={{flex:1, flexDirection:'column', justifyContent:'space-between', paddingVertical:2, paddingHorizontal:10}}> 
            <View><Text style={{fontSize:16}}>{`${name}`}</Text></View>
            <View><Text style={{fontSize:14, color:'gray'}}>{`${role}`}</Text></View>
        </View>
    </View>)
})


const UserTypeRow = memo(({onPress, selected, role}) => {
    return(
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 50, alignItems: 'center', backgroundColor: (selected === role) ? "#e8f2fb" : 'white', paddingHorizontal: 5, borderRadius: 5 }}>
        <TouchableOpacity
            style={{ height: 20, width: 20, backgroundColor: (selected === role) ? "skyblue" : 'white', borderRadius: 25, borderWidth: 1, borderColor: (selected === role) ? "skyblue" : 'gray' }}
            onPress={onPress}
        />
        <View style={{ flex: 1, height: 20, width: 20, justifyContent: 'center', paddingHorizontal: 5 }}>
            <Text>{role}</Text>
        </View>
    </View>)
})

export  {
    CustomerRow,
    UserTypeRow
}