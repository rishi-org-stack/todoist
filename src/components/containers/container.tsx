import React, { ReactElement } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native';
// import {create} from 'tailwind-rn';
// import styles from '../styles/styles.json';
// const {tailwind, getColor} = create(styles);

interface Props {
    flex?:number;
    row?:boolean;
    center?:boolean;
    column?:boolean;
    height?:number|string;
    width?:number|string;
    borderW?:number;
    borderL?:number;
    borderR?:number;
    borderT?:number;
    borderRadius?:number;
    borderB?:number;
    margin?:number;
    marginR?:number;
    marginL?:number;
    marginB?:number;
    marginT?:number;
    borderC?:string;
    alignItems?:"flex-start"|"flex-end"|"center";
    children?: React.ReactNode;
    style?:StyleProp<ViewStyle>
    
}

function Container(p: Props): ReactElement {
    // const style = tailwind('bg-red-500 h-7 w-7')
    return (
        <View style={[{
            flex:p.flex,
            // backgroundColor:'red',
            flexDirection:p.row && 'row'||'column',
            height:p.height,
            width:p.width,
            borderWidth:p.borderW,
            borderLeftWidth:p.borderL,
            borderRightWidth:p.borderR,
            borderTopWidth:p.borderT,
            borderBottomWidth:p.borderB,
            borderRadius:p.borderRadius,
            margin:p.margin,
            marginRight:p.marginR,
            marginLeft:p.marginL,
            marginBottom:p.marginB,
            marginTop:p.marginT,
            borderColor:p.borderC,
            alignItems:p.alignItems
        },p.center && {
            alignItems:'center',
            justifyContent:'center'

        },p.style]}>
            {p.children}
        </View>
    )
}

export  {
    Container,
   
}

export type{
    Props
}