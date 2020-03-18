import React from 'react'
import ReactModal from 'react-modal'

export interface ModalProps {
    isOpen: boolean
    children: React.ReactNode
    onRequestClose(): void
}

export default function Modal(props: ModalProps) {
    return (
        <ReactModal ariaHideApp={false} isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
            {props.children}
        </ReactModal>
    )
}
