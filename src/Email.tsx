import React, {RefObject, useRef, useState} from 'react'
import './css/Email.css'

export default function Email() {
    const email = 'bz.ennm@gmail.com'
    const emailInputRef = useRef(null)

    return (
        <div className='email'>
            <input className='email-input' readOnly ref={emailInputRef} value={email}/>
            <a href={`mailto:${email}`} className='email-link'>{email}</a>
            <CopyButton inputRef={emailInputRef}/>
        </div>
    )
}

interface CopyEmailButtonProps {
    inputRef: RefObject<HTMLInputElement>
}

function CopyButton(props: CopyEmailButtonProps) {
    const [floatingTexts, setFloatingTexts] = useState<any[]>([])
    const [timeoutId, setTimeoutId] = useState<any | undefined>()
    const keyCounter = useRef(0)

    function onButtonClick() {
        if (timeoutId !== undefined)
            clearTimeout(timeoutId)

        if (props.inputRef.current === null)
            return

        copyInputToClipboard(props.inputRef.current)
        setFloatingTexts([...floatingTexts, <p className='copied-floating-text' key={keyCounter.current}>copied</p>])
        keyCounter.current++
        setTimeoutId(setTimeout(() => setFloatingTexts([]), 1000))
    }

    return (
        <div className='copy-button-wrapper'>
            {floatingTexts}
            <a className='copy-button' onClick={onButtonClick}>
                copy
            </a>
        </div>
    )
}

function copyInputToClipboard(input: HTMLInputElement): void {
    input.select()
    document.execCommand('copy')
    input.setSelectionRange(0, 0)
}
