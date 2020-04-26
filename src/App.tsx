import React, {useState} from 'react'
import Menu from './Menu'
import './css/App.css'

export default function App() {
    const [selection, setSelection] = useState('')

    return (
        <div>
            <Menu className={(selection === '') ? 'center-menu' : 'top-menu'} onSelectionChange={setSelection}/>
        </div>
    )
}
