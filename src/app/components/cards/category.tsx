import React, { ReactElement } from 'react'
import { Text, TouchableContainer, ViewContainer } from '../../../components'

interface Props {
    tasks?:number,
    category?:string
    onPressCard?:(ok:string)=>void
}

function Category(p: Props): ReactElement {
    return (
        <TouchableContainer height={100} width={180} borderRadius={15} style={{
            backgroundColor:"green",
            justifyContent:'flex-start'
        }} 
            Onpress={()=>p.onPressCard}
        >
            
            <ViewContainer flex={1}  marginL={15} alignItems='flex-start' style={{
                // justifyContent:'center'
            }}>
                <Text>
                    {p.tasks==undefined ? 0 :p.tasks.toString()+"\t\t"} todos
                </Text>
            </ViewContainer>
            <ViewContainer flex={3} marginL={15}>
                <Text medium>
                    {p.category}
                </Text>
            </ViewContainer>
        </TouchableContainer>
    )
}

export default Category
