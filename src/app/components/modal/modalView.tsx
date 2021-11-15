import React, { ReactElement } from 'react'
import { Modal } from 'react-native'
import { ViewContainer } from '../../../components'

interface Props {
    tranparent?:boolean;
    visible?:boolean;
    children?:React.ReactNode
}

function ModalView(p: Props): ReactElement {
    return (
        <Modal
            visible={p.visible}
            transparent={p.tranparent}
            animationType='slide'
            style={{
                // opacity:1,
                flex:1,
                alignItems:'center'
                // alignItems:'center',
                // justifyContent:'center',

            }}>
                <ViewContainer flex={1} alignItems='center' style={{
                    // justifyContent:'center'
                }}>
                {p.children}

                </ViewContainer>
            </Modal>
    )
}

export default ModalView
