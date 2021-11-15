import React, { ReactElement } from 'react'
import { Text, ViewContainer } from '../../../components'

interface Props {
    
}

function TodoCard({}: Props): ReactElement {
    return (
        <ViewContainer width={'90%'} alignItems='center' borderRadius={10} row style={{
            backgroundColor:"red",
        }}>
            <ViewContainer 
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

            </ViewContainer>
            <ViewContainer flex={1} >
                <Text>
                    Daily tasks
                </Text>
            </ViewContainer>

        </ViewContainer>
    )
}

export default TodoCard
