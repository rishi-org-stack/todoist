import React, { ReactElement } from 'react'
import { Text, ViewContainer } from '../../../components'

interface Props {
    
}

function Category({}: Props): ReactElement {
    return (
        <ViewContainer height={100} width={180} borderRadius={15} style={{
            backgroundColor:"green"
        }}>
            <ViewContainer flex={1}  marginL={15} alignItems='flex-start' style={{
                justifyContent:'center'
            }}>
                <Text>
                    40 tasks
                </Text>
            </ViewContainer>
            <ViewContainer flex={3} marginL={15}>
                <Text medium>
                    Buisness
                </Text>
            </ViewContainer>
        </ViewContainer>
    )
}

export default Category
