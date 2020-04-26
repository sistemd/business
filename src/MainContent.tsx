import React from 'react'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import {ButtonName} from './Menu'
import Email from './Email'
import CV from './CV'
import Github from './Github'
import './css/MainContent.css'

export interface MainContentProps {
    selectedButton?: ButtonName
}

export default function MainContent(props: MainContentProps) {
    function Content() {
        switch (props.selectedButton) {
            case 'email': return <Email/>
            case 'cv': return <CV/>
            case 'github': return <Github/>
        }

        return <></>
    }

    return (
        <SwitchTransition mode='out-in'>
            <CSSTransition key={props.selectedButton} timeout={200} classNames={'fade'}>
                <Content/>
            </CSSTransition>
        </SwitchTransition>
    )
}