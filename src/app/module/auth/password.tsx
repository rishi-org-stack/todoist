import { StackNavigationProp } from '@react-navigation/stack'
import React, { ReactElement } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'
import { Input, TouchableContainer, ViewContainer } from '../../../components'
import { en } from '../../../lang/en'
import Icon from "../../assets"
import { useGetUser } from '../../hooks/user'

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

function Password({navigation}: Props): ReactElement {
    const user = useGetUser(db,1)
    const [password, setpassword] = React.useState('')

    const changePassword=(text:string)=>{
        setpassword(text)
    }
    const handleSubmission=()=>{

        if (password===Object(user)['password']){
            console.log('matched');
            navigation.navigate('Drawer')
            
        }else{
            console.log('unauthorized');
            
        }
    }
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
                OnChangeText={text=>changePassword(text)}
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
                Onpress={()=>handleSubmission()}
            >
                {en.next}
            </TouchableContainer>
        </ViewContainer>
    )
}

export default Password
