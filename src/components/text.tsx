import React, { ReactElement } from 'react'
import {Text as RnText} from 'react-native'

interface Props {
    children?:React.ReactNode;
    small?:boolean;
    verysmall?:boolean;
    large?:boolean;
    medium?:boolean;
    bold?: boolean;
    weight?: '100' |'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'
    textAlign?: 'left'|'right'|'center';
}

function Text(p: Props): ReactElement {
    return (
        <RnText style={{
            textAlign:p.textAlign,
            fontWeight:p.bold && 'bold' || 'normal',
            fontSize:p.verysmall && 10||p.small && 16||p.large &&32 ||p.medium && 24 ||15
            
        }}>
            {p.children}
        </RnText>
    )
}

export default Text
