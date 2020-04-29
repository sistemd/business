import React from 'react'
import './css/Button.css'

export interface ButtonProps {
    text: string
    className?: string
    id?: string

    onClick?(): void
}

export default function Button(props: ButtonProps) {
    return (
        <p onClick={props.onClick} className={'button ' + (props.className || '')} id={props.id}>{props.text}</p>
    )
}
