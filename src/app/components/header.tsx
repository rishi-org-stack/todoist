import React, { ReactElement } from 'react'
import { ImageComponent, TouchableOpacity } from 'react-native'
import { Input, Text, TouchableContainer, ViewContainer } from '../../components'
import { en } from '../../lang/en'
import Icon from "../assets"
interface Props {
    onPressMenu?:()=>void;
    onPressBell?:()=>void;
}

function Header(p: Props): ReactElement {
    return (
        <ViewContainer row height={50} width={'100%'}>
            <ViewContainer flex={1} center>
                <TouchableContainer Onpress={p.onPressMenu}>
                <Icon.Menu height={30}/>

                </TouchableContainer>
            </ViewContainer>
            <ViewContainer flex={3} alignItems='center' center
            style={{
                backgroundColor:'yellow'
            }}
            >
                <Input
                    placeholder='Category: priority '
                    LeftComponent={
                        <Icon.Search height={20} style={{
                            marginLeft:5
                        }}/>
                    }
                    height={37}
                    borderRadius={10}
                />
            </ViewContainer>
            <ViewContainer flex={1} center style={{
                backgroundColor: 'red',
            }}>
                <TouchableOpacity onPress={p.onPressBell} >
                    <Icon.Bell height={20}/>
                </TouchableOpacity>
            </ViewContainer>

        </ViewContainer>
    )
}

export default Header
