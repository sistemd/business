import React from 'react'
import EmailButton from "./EmailButton"
import CVButton from './CVButton'
import ProjectsButton from "./ProjectsButton";
import './css/App.scss'

export default function App() {
    return (
        <div className="outer-container">
            <EmailButton/>
            <CVButton/>
            <ProjectsButton/>
        </div>
    )
}
