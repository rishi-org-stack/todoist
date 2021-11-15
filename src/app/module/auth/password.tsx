import { StackNavigationProp } from '@react-navigation/stack'
import React, { ReactElement } from 'react'
import { Input, TouchableContainer, ViewContainer } from '../../../components'
import { en } from '../../../lang/en'
import Icon from "../../assets"

interface Props {
    navigation: StackNavigationProp<any,any>
}

function Password({navigation}: Props): ReactElement {
    return (
        <ViewContainer flex={1} center>
            <Input 
                placeholder={en.password} 
                height={37} 
                        width='80%' 
                 style={{
                     backgroundColor:'red'
                }}
                borderRadius={10}
                marginT={40}
                LeftComponent={
                    <Icon.Password height={20}
                />}
            />
            <TouchableContainer 
                height={35}
                width={100}
                center
                borderRadius={10}
                margin={40}
                style={{
                    backgroundColor:'red',
                }}
                rightComponent={
                    <Icon.Right height={15}/>
                }
                Onpress={()=>{
                    navigation.navigate('Drawer')
                }}
            >
                {en.next}
            </TouchableContainer>
        </ViewContainer>
    )
}

export default Password
