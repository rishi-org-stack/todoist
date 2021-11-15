import React, { ReactElement } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { TouchableContainer } from '../../components'
import Icon from "../assets"
interface Props {
    children?:React.ReactNode
    style?:StyleProp<ViewStyle>
    onPress?:()=>void
}

function FloatingButton(p: Props): ReactElement {
    return (
        <TouchableContainer height={50} center width={50} borderRadius={50} style={[{
            backgroundColor:'green'
        },p.style]}
        Onpress={p.onPress}
        >
            {
                p.children
            }
        </TouchableContainer>
    )
}

export default FloatingButton
