import React, {useState} from 'react'
import Menu, {ButtonName} from './Menu'
import './css/App.css'
import MainContent from './MainContent'
import Github from './Github'

export default function App() {
    const [selectedButton, setSelectedButton] = useState<ButtonName | undefined>()

    return (
        <Github />
    )

    return (
        <div>
            <Menu className={selectedButton ? 'top-menu' : 'center-menu'} onSelectedButtonChange={setSelectedButton}/>
            <MainContent selectedButton={selectedButton}/>
        </div>
    )
}
