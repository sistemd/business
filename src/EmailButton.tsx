import React, {useState} from 'react'
import Button from './Button'
import './css/EmailButton.scss'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

export default function EmailButton() {
    const [showEmail, setShowEmail] = useState(false)
    const [animateButton, setAnimateButton] = useState(false)

    const [buttonStates, setButtonStates] = useState([
        {
            text: 'EMAIL',
            callback() {
                setShowEmail(true)
                setAnimateButton(true)
            }
        },
        {
            text: 'COPY',
            callback() {

            }
        },
        {
            text: 'COPIED',
        }
    ])

    const currentButtonState = buttonStates[0]

    function onButtonClick() {
        if (currentButtonState.callback !== undefined) {
            currentButtonState.callback()
            setButtonStates(states => states.slice(1))
        }
    }

    return (
        <div className="wrapper">
            <Button
                disabled={currentButtonState.callback === undefined}
                className={animateButton ? 'button-animation' : ''}
                onClick={onButtonClick}
            >
                <SwitchTransition>
                    <CSSTransition timeout={200} key={currentButtonState.text} classNames="email-button">
                        <p className="button-text">{currentButtonState.text}</p>
                    </CSSTransition>
                </SwitchTransition>
            </Button>
            {showEmail && <p className="email">email@email.email</p>}
        </div>
    )
}
