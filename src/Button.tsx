import React from 'react'
import './css/Button.css'

export interface ButtonProps {
    text: string
    className?: string
    onClick?(): void
}

export default function Button(props: ButtonProps) {
    return (
        <p onClick={props.onClick} className={'button ' + (props.className || '')}>{props.text}</p>
    )
}
