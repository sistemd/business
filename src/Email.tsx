import React, {RefObject, useRef, useState} from 'react'
import Button from './Button'
import './css/EmailButton.scss'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

const buttonAnimationTimeout = 200

export default function Email() {
    const [showEmail, setShowEmail] = useState(false)
    const emailInputRef = useRef<HTMLInputElement>(null)

    const email = 'bz.ennm@gmail.com'

    const showEmailButton = (
        <Button onClick={() => setShowEmail(true)}>
            EMAIL
        </Button>
    )

    const copyEmailButton = <CopyEmailButton email={email} emailInputRef={emailInputRef}/>

    return (
        <div className="wrapper">
            {showEmail ? copyEmailButton : showEmailButton}
            {showEmail && <input className="email" value={email} readOnly ref={emailInputRef}/>}
        </div>
    )
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
        <Button onClick={onButtonClick}>
            <SwitchTransition>
                <CSSTransition appear timeout={buttonAnimationTimeout} key={text} classNames="copy-button">
                    <p className={'copy-button-text'}>{text}</p>
                </CSSTransition>
            </SwitchTransition>
        </Button>
    )
}

function copyInputToClipboard(input: HTMLInputElement): void {
    input.select()
    document.execCommand('copy')
    input.setSelectionRange(0, 0)
}
