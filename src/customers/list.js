
import React from "react";
import {CustomerRow,UserTypeRow } from './rows';

const CustomerList = ({id, name, email, role}) => {
    return(<CustomerRow key={id} name={name} email={email} role={role}/>)
}


const UserTypesList = ({ onPress, selected, role }) => {
    return (
        <UserTypeRow 
            onPress={onPress}
            selected={selected}
            role={role}
        />
        )
}

export  {
    CustomerList,
    UserTypesList
}