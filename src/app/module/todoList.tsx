import React, { ReactElement, useState } from 'react'
import { Dimensions, ScrollView } from 'react-native';
import { Input, Text, TouchableContainer, ViewContainer } from '../../components';
import { en } from '../../lang/en';
import { Category, FloatingButton, Header, ModalView, TodoCard } from '../components';
import Icon from "../assets"
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
interface Props {
    navigation: DrawerNavigationHelpers
}
const data =[
    1,2,3,4,5,6,7,8
]
function TodoList({navigation}: Props): ReactElement {
    const [categoryModalVisible, setcategoryModalVisible] = useState(false)
    const [todoModal, settodoModal] = useState(false)
    const [MenueClicked, setMenueClicked] = useState(false)
    return(
            <ViewContainer
                flex={1}
                
            >
                <CategoryModal visible={categoryModalVisible}  onClose={()=>setcategoryModalVisible(false)} />
                <TodoModal visible={todoModal}  onClose={()=>settodoModal(false)} />
                <Header onPressMenu={
                    ()=>{
                        navigation.openDrawer()                        
                }}/>
                <ViewContainer
                    flex={1}
                    marginT={30}
                    marginL={20}
                >
                    <Text bold large>
                        {en.whatUp+"Olivia"}
                    </Text>
                    <ViewContainer flex={1} marginT={10}>
                        <ViewContainer row>
                            <ViewContainer flex={3}>
                                <Text verysmall bold>
                                    {en.categories}
                                </Text>
                            </ViewContainer>
                            
                            <TouchableContainer center  Onpress={()=>setcategoryModalVisible(true)} flex={1}>
                                <Icon.Plus height={15}/>
                            </TouchableContainer>
                        </ViewContainer>
                        
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{
                                marginTop:10
                            }}
                        >
                            {
                                data.map((_,i)=>{
                                    return(
                                        <ViewContainer key={i.toString()+"_category"} marginR={10}>
                                            <Category/>
                                        </ViewContainer>
                                    )
                                })
                            }
                        </ScrollView>
                    </ViewContainer>

                    <ViewContainer flex={3} marginT={10}>
                        <Text verysmall bold>
                            {en.tasks}
                        </Text>
                        <ScrollView
                            // horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{
                                marginTop:10
                            }}
                        >
                            {
                                data.map((_,i)=>{
                                    return(
                                        <ViewContainer key={i.toString()+"_category"} marginB={10}>
                                            <TodoCard/>
                                        </ViewContainer>
                                    )
                                })
                            }
                        </ScrollView>
                        <FloatingButton onPress={()=>settodoModal(true)}  style={{
                            bottom:30,
                            left:Dimensions.get('screen').width-80
                        }}
                            
                        >
                            <Icon.Plus height={20}/>
                        </FloatingButton>
                    </ViewContainer>
                    
                </ViewContainer>
            </ViewContainer>
    )
}

const CategoryModal=(p:Tprops)=>{
    return(
        <ModalView tranparent={p.transparent}
        visible={p.visible}>
            <ViewContainer row alignItems='flex-end' style={{
                justifyContent:'space-evenly'
            }}>
                <Input 
                            placeholder={en.password} 
                            height={35} 
                        
                            width='60%' 
                            style={{
                                backgroundColor:'red'
                            }}
                            borderRadius={10}
                            marginT={40}
                            marginR={20}
                            LeftComponent={
                            <Icon.Password height={20}
                            />}
                        />
                <TouchableContainer Onpress={p.onClose} width={30} height={30} style={{
                            backgroundColor:'red',
                            
                        }}
                        rightComponent={
                            <Icon.Right height={12}/>
                        }
                        borderRadius={10}
                        marginB={5}
                />
            </ViewContainer>

        </ModalView>
    )
}

interface Tprops {
    visible?:boolean
    transparent?:boolean;
    onClose?:()=>void
}
const TodoModal=(p:Tprops)=>{
    return(
        <ModalView 
            tranparent={p.transparent}
            visible={p.visible}
        >
            <ViewContainer row alignItems='flex-end' style={{
                justifyContent:'space-evenly'
            }}>
                <Input 
                            placeholder={en.password} 
                            height={35} 
                        
                            width='60%' 
                            style={{
                                backgroundColor:'red'
                            }}
                            borderRadius={10}
                            marginT={40}
                            marginR={20}
                            LeftComponent={
                            <Icon.Password height={20}
                            />}
                        />
                <TouchableContainer Onpress={p.onClose} width={30} height={30} style={{
                            backgroundColor:'red',
                            
                        }}
                        rightComponent={
                            <Icon.Right height={12}/>
                        }
                        borderRadius={10}
                        marginB={5}
                />
            </ViewContainer>

        </ModalView>
    )
}

export default TodoList;
