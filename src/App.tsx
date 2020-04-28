import React, {useState} from 'react'
import Menu, {ButtonName} from './Menu'
import MainContent from './MainContent'
import './css/App.css'

export default function App() {
    const [selectedButton, setSelectedButton] = useState<ButtonName | undefined>()

    return (
        <div>
            <Menu className={selectedButton ? 'top-menu' : 'center-menu'} onSelectedButtonChange={setSelectedButton}/>
            <MainContent selectedButton={selectedButton}/>
        </div>
    )
}
