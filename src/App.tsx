import React, {useState} from 'react'
import Email from './Email'
import CV from './CV'
import Github from './Github'
import './css/App.scss'

export default function App() {
    return (
        <div className="outer-container">
            <Email/>
            <CV/>
            <Github/>
        </div>
    )
}
