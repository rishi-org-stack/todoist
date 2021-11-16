import React, { ReactElement } from 'react'
import { Text, TouchableContainer, ViewContainer } from '../../../components'

interface Props {
    // group?:string;

}

function TodoCard({}: Props): ReactElement {
    return (
        <ViewContainer width={'90%'} alignItems='center' borderRadius={10} row style={{
            backgroundColor:"red",
        }}>
            <TouchableContainer 
                height={30} 
                width={30} 
                marginT={20}
                marginB={20}
                marginR={10}
                marginL={10}
                borderRadius={50} 
                borderW={2}
                borderC='green'
                >

            </TouchableContainer>
            <ViewContainer flex={1} >
                <Text>
                    Daily tasks
                </Text>
            </ViewContainer>

        </ViewContainer>
    )
}

export default TodoCard
