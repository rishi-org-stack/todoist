import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react'
import { openDatabase } from 'react-native-sqlite-storage';
import { Use } from 'react-native-svg';
import { ViewContainer,Text, Input, TouchableContainer } from '../../../components';
import { en } from '../../../lang/en';
import { Todo, User } from '../../../services/user/services';
import UserService from '../../../services/user/user';
import Icon from "../../assets";
import { setTodo, useGetTodos } from '../../hooks/task';
import { deleteData, setData, useGetConnection, useGetUser } from '../../hooks/user';

interface Props {
    navigation: StackNavigationProp<any,any>

}
const db = openDatabase(
    {
        name: 'todoist',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
  );
  
function Register(p: Props): ReactElement {
    const user=useGetTodos(db,'cat')
    return (
        <ViewContainer flex={1} >
            <ViewContainer flex={1}>
                <ViewContainer margin={20}>
                    <Text medium bold>
                        {en.register}
                    </Text>
                    <Text small>
                        {en.welcome}
                    </Text>
                </ViewContainer>
            </ViewContainer>
            <ViewContainer flex={6} center alignItems='center'>
                <ViewContainer flex={1}center>
                    <Input 
                        placeholder={en.username} 
                        height={35} 
                        width='80%' 
                        style={{
                        backgroundColor:'red'
                    }}
                    borderRadius={10}
                    LeftComponent={
                        <Icon.User height={20}
                        />}
                    />
                    <Input 
                        placeholder={en.password} 
                        height={35} 
                    
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
                </ViewContainer>
                <ViewContainer flex={1}>
                <TouchableContainer height={30} width={80} style={{
                        backgroundColor:'red'
                    }}
                    rightComponent={
                        <Icon.Right height={12}/>
                    }
                    borderRadius={10}
                    Onpress={()=>{
                        // setTodo(db,new Todo('head2',0,'cat'))
                        console.log(user);
                        
                    }}
                    >
                        {en.next}
                    </TouchableContainer>
                </ViewContainer>
                
            </ViewContainer>
        </ViewContainer>
    )
}

export default Register;