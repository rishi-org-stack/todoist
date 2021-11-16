import React, { ReactElement, useState } from 'react'
import { Dimensions, ScrollView } from 'react-native';
import { Input, Text, TouchableContainer, ViewContainer } from '../../components';
import { en } from '../../lang/en';
import { Category, FloatingButton, Header, ModalView, TodoCard } from '../components';
import Icon from "../assets"
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { openDatabase } from 'react-native-sqlite-storage';
import { setGroup, useGetGroups } from '../hooks/category';
import { Group, Todo } from '../../services/user/services';
import { setTodo, useGetTodos } from '../hooks/task';
interface Props {
    navigation: DrawerNavigationHelpers
}
const data =[
    1,2,3,4,5,6,7,8
]

const db = openDatabase(
    {
        name: 'todoist',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
  );
function TodoList({navigation}: Props): ReactElement {
    const [categoryModalVisible, setcategoryModalVisible] = useState(false)
    const [todoModal, settodoModal] = useState(false)
    const [nameCategory, setnameCategory] = useState('')
    const [nameTodo, setnameTodo] = useState('')
    const [currentCategory, setcurrentCategory] = useState('')
    const groups=useGetGroups(db)
    const todos = useGetTodos(db,currentCategory)

    const changeNameCategory=(text:string)=>{
        setnameCategory(text)
    }
    const changeNameTodo=(text:string)=>{
        setnameTodo(text)
    }
    const handleCategoryModalClose=()=>{
        setGroup(db,new Group(nameCategory))
        setcategoryModalVisible(false)
    }
    const handleTodoModalClose=()=>{
        setTodo(db,new Todo(nameTodo,0,currentCategory))
    }

    const handleClickCard=(text:string)=>{
    setcurrentCategory(text)

    }
    return(
            <ViewContainer
                flex={1}
                
            >
                <CategoryModal 
                    visible={categoryModalVisible}     
                    onClose={()=>{
                        handleCategoryModalClose()
                        console.log(groups);
                        }
                        
                    }
                    onChangeText={(text:string)=>changeNameCategory(text)}
                     />
                <TodoModal 
                    visible={todoModal}  
                    onChangeText={(text)=>changeNameTodo(text)}
                    onClose={()=>{
                        handleTodoModalClose()
                        settodoModal(false)
                }} />
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
                            
                            <TouchableContainer centerMain center  Onpress={()=>setcategoryModalVisible(true)} flex={1}>
                                <Icon.Plus height={15}/>
                            </TouchableContainer>
                        </ViewContainer>
                        {
                            groups.length>0 ?
                            <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{
                                marginTop:10
                            }}
                            >
                                {
                                    groups.map((val,i)=>{
                                        let value:Group = Object(val)
                                        return(
                                            <ViewContainer key={i.toString()+"_category"} marginR={10}>
                                                <Category 
                                                    tasks={value.totalTodos} 
                                                    category={value.name} 
                                                    onPressCard={()=>handleClickCard(value.name)}
                                                    />
                                            </ViewContainer>
                                        )
                                    })
                                }
                            </ScrollView>
                            :
                            <ViewContainer 
                                height={'100%'} 
                                width={'100%'} center>
                            <Text> Add a category</Text>
                            </ViewContainer>
                        }
                        
                    </ViewContainer>

                    <ViewContainer flex={3} marginT={10}>
                        <Text verysmall bold>
                            {en.tasks}
                        </Text>
                        {/* {
                            todos.length>0? */}
                            <ScrollView
                            // horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{
                                    marginTop:10
                                }}
                            >
                                {
                                    todos.map((_,i)=>{
                                        return(
                                            <ViewContainer key={i.toString()+"_category"} marginB={10}>
                                                <TodoCard/>
                                            </ViewContainer>
                                        )
                                    })
                                }
                            </ScrollView>
                        {/* //     :
                            
                            <ViewContainer center height={'100%'} width={'100%'}>
                                <Text>
                                    Add a todo in {currentCategory}
                                </Text>
                            </ViewContainer>
                        } */}
                        
                        <FloatingButton 
                            // onPress={()=>{
                            //     // setTodo(db,new Todo("name1",0,currentCategory))
                            //     console.log(todos);
                                
                            // }}
                            onPress={()=>{
                                console.log(todos);
                            settodoModal(true)}}  
                            style={{
                            bottom:40,
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
                            OnChangeText={p.onChangeText}
                        />
                <TouchableContainer centerMain Onpress={p.onClose} width={30} height={30} style={{
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
    onChangeText?:(text:string)=>void
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
                                OnChangeText={p.onChangeText}
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
