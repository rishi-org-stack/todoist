import { Container, Props } from "./containers/container";

import React, { ReactElement } from 'react'
import { Text, TextInput, TouchableOpacity } from "react-native";

interface TProps {
    OnChangeText?: ()=>void;
    rightComponent?:React.ReactNode;
    LeftComponent?:React.ReactNode;
    placeholder?:string;

}
type TouchProps = TProps & Props
function Input(p: TouchProps): ReactElement {
    return (
            <Container {...p} row  alignItems='flex-end'>
                <Container center flex={0.1} height={'100%'} >
                    {p.LeftComponent}
                </Container> 
                <Container flex={1}>
                    <TextInput placeholder={p.placeholder} />
                </Container>
                <Container center flex={0.1} height={'100%'} >
                    {p.rightComponent}
                </Container> 
            </Container>
        
    )
}

export default Input
