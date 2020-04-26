import React, {useState} from 'react'
import Button from './Button'
import './css/Menu.css'

export interface MenuProps {
    className?: string
    onSelectionChange(newSelection: string): void
}

export default function Menu(props: MenuProps) {
    const [emailClass, setEmailClass] = useState('left')
    const [cvClass, setCvClass] = useState('center')
    const [githubClass, setGithubClass] = useState('right')

    function onEmailClick() {
        setEmailClass('center large')
        setCenterButtonClass(emailClass)
        props.onSelectionChange('email')
    }

    function onCvClick() {
        setCvClass('center large')
        setCenterButtonClass(cvClass)
        props.onSelectionChange('cv')
    }

    function onGithubClick() {
        setGithubClass('center large')
        setCenterButtonClass(githubClass)
        props.onSelectionChange('github')
    }

    function setCenterButtonClass(newClass: string) {
        if (emailClass.includes('center'))
            setEmailClass(newClass)
        else if (cvClass.includes('center'))
            setCvClass(newClass)
        else if (githubClass.includes('center'))
            setGithubClass(newClass)
    }

    return (
        <div className={'menu ' + (props.className || '')}>
            <Button text='Email' onClick={onEmailClick} className={emailClass}/>
            <Button text='CV' onClick={onCvClick} className={cvClass}/>
            <Button text='Github' onClick={onGithubClick} className={githubClass}/>
        </div>
    )
}
