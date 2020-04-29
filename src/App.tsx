import React, {useState} from 'react'
import Menu, {ButtonName} from './Menu'
import MainContent from './MainContent'
import BackgroundGradient from './BackgroundGradient'
import './css/App.css'

export default function App() {
    const [selectedButton, setSelectedButton] = useState<ButtonName | undefined>()
    const [backgroundGradientOffset, setBackgroundGradientOffset] = useState('0')

    function onSelectedButtonChange(newButton: ButtonName) {
        setSelectedButton(newButton)
        setBackgroundGradientOffset('50%')
    }

    return (
        <>
            <BackgroundGradient offset={backgroundGradientOffset}/>
            <div>
                <Menu className={selectedButton ? 'top-menu' : 'center-menu'}
                      onSelectedButtonChange={onSelectedButtonChange}/>
                <MainContent selectedButton={selectedButton}/>
            </div>
        </>
    )
}
