import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { Text, ViewContainer } from "../../components";
import Password from "../module/auth/password";
import Register from "../module/onboarding/register";
import TodoList from "../module/todoList";
import Icon from "../assets"
import { Service } from "../../services/user/services";


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const LoginStack=()=>{
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen 
      name='Password'
      component={Password}
      />
      <Stack.Screen 
      name='Drawer'
      component={DrawNav}
      />
    </Stack.Navigator>
  )
}


const RegisterStack=()=>{
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen 
      name='Register'
      component={Register}
      />
      <Stack.Screen 
      name='Drawer'
      component={DrawNav}
      />
    </Stack.Navigator>
  )
}

const DrawNav=()=>{
    return(
      <Drawer.Navigator
        drawerContent={(p)=> <SideBar {...p}/>}
        screenOptions={{
          headerShown:false
        }}
      >
        <Drawer.Screen
          name="List"
          component={TodoList} />
      </Drawer.Navigator>
    )
}

const SideBar =(p:DrawerContentComponentProps)=>{
    return(
      <SafeAreaView style={{ flex: 1}}>
        <DrawerContentScrollView>
          <ViewContainer marginL={20} marginT={10}>
            <ViewContainer height={80} width={80} borderRadius={50} style={{
              backgroundColor:'red'
            }}/>
  
              <Text large bold >
                Olivia,{'\n'} Molti
              </Text>
          </ViewContainer>
          <ViewContainer marginT={5} height={1} width={'90%'} style={{
            backgroundColor:'red'
          }}/>
            <DrawerItem 
              label={'Home'} onPress={function (): void {
                p.navigation.navigate('List')
              }}
              icon={
                (p)=><Icon.Home height={20} width={20}/>
              }
            />
            <DrawerItem 
              label={'Setting'} onPress={function (): void {
                // p.navigation.navigate('Password')
              }}
              icon={
                (p)=><Icon.Setting height={20} width={20}/>
              }
            />
  
            <DrawerItem 
              label={'Reset'} onPress={function (): void {
                //implement later
              }}
              icon={
                (p)=><Icon.Reset height={20} width={20}/>
              }
            />
        </DrawerContentScrollView>
        <DrawerItem 
          label={'SignOut'} onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
            icon={
              ()=>
                <Icon.Logout height={20} width={20}/>
            }
          />
      </SafeAreaView>
    )
  }

const Router =()=>{
    return(
        <RegisterStack/>
    )
}
export default Router;