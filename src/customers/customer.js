import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CustomerList, UserTypesList } from './list';
const customersList = require('../utils/customers.json');


const Customers = () => {
    const [value, setValue] = React.useState({
        selected: [...new Set(customersList.map((data => data.role)))].at(0),
        roles: [...new Set(customersList.map((data => data.role)))],
        customers: customersList.filter((item) => item.role == [...new Set(customersList.map((data => data.role)))].at(0)),
    });

    const handleButtonClick = useCallback((data) => {
        setValue({
            ...value,
            selected:data,
            customers: customersList.filter((item) => item.role === data )
        })
    },[value.selected])

    return (
        <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 20, padding: 15}}>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <View>
                            <Text style={{fontSize:18, fontWeight:500}}>User Types</Text>
                            <View>
                            <FlatList
                                data={value.roles}
                                renderItem={({ item }) => {
                                    return (
                                        <UserTypesList
                                            onPress={()=>handleButtonClick(item)}
                                            selected={value.selected}
                                            role={item}
                                        />
                                    )
                                }}
                                extraData={value}
                            />
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:18, fontWeight:500, paddingVertical: 20}}>Admin Users</Text>
                        </View>
                    </View>
                }
                ItemSeparatorComponent={<View style={{ paddingVertical: 10 }} />}
                data={value.customers}
                renderItem={({ item }) => {
                    let { id, name, email, role } = item;
                    return <CustomerList key={id} id={id} name={name} email={email} role={role} />
                }}
                extraData={value}
            />
        </View>
    )
}
export default Customers;