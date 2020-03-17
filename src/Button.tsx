import React from 'react'
import './css/Button.scss'

export interface ButtonProps {
    children: React.ReactNode
    disabled: boolean
    className: string

    onClick(): void
}

export default function Button(props: ButtonProps) {
    return (
        <button disabled={props.disabled} onClick={props.onClick} className={props.className}>
            {props.children}
        </button>
    )
}
