import React, {useState} from 'react'
import Button from './Button'
import './css/Menu.css'

export type ButtonName = 'email' | 'cv' | 'github'

export interface MenuProps {
    className?: string

    onSelectedButtonChange(newButton: ButtonName): void
}

export default function Menu(props: MenuProps) {
    const [classes, setClasses] = useState({
        email: 'left',
        cv: 'center',
        github: 'right',
    })

    function onClick(button: ButtonName) {
        resetMenuAnimationDelay()
        props.onSelectedButtonChange(button)
        setClasses({
            ...classes,
            [button]: 'center large',
            [currentCenterButton()]: (classes[button] === 'center') ? 'center large' : classes[button],
        })
    }

    function currentCenterButton(): ButtonName {
        for (const [k, v] of Object.entries(classes)) {
            if (v.includes('center'))
                return k as ButtonName
        }
        return 'cv'
    }

    return (
        <div className={'menu ' + (props.className || '')}>
            <Button id='email' text='Email' onClick={() => onClick('email')} className={classes['email']}/>
            <Button id='cv' text='CV' onClick={() => onClick('cv')} className={classes['cv']}/>
            <Button id='github' text='Github' onClick={() => onClick('github')} className={classes['github']}/>
        </div>
    )
}

function resetMenuAnimationDelay() {
    const style = (document.querySelector(':root') as any).style
    setTimeout(() => {
        style.setProperty('--menu-button-animation-delay', 0)
    }, style.getPropertyValue('--menu-button-animation-delay'))
}
