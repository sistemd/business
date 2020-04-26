import React, {RefObject, useRef, useState} from 'react'
import Button from './Button'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

const buttonAnimationTimeout = 200

export default function Email() {
    return <></>
}

interface CopyEmailButtonProps {
    email: string
    emailInputRef: RefObject<HTMLInputElement>
}

function CopyEmailButton(props: CopyEmailButtonProps) {
    const copyText = 'COPY'
    const doneText = '\u2713'

    const [emailCopied, setCopied] = useState(false)
    const text = emailCopied ? doneText : copyText

    function onButtonClick() {
        if (props.emailInputRef.current === null)
            return

        copyInputToClipboard(props.emailInputRef.current)
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
    }

    return (
        <>
        </>
    )
}

function copyInputToClipboard(input: HTMLInputElement): void {
    input.select()
    document.execCommand('copy')
    input.setSelectionRange(0, 0)
}
