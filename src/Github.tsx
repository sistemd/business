import React, {useEffect, useState} from 'react'
import './css/Github.css'

export default function Github() {
    return (
        <>
            <BriefDescription/>
            <NotableProjectsList/>
        </>
    )
}

interface GithubProject {
    url: string
    name: string
    description: string
    language: string
}

function BriefDescription() {
    return <></>
}

function NotableProjectsList() {
    const notableProjects = [
        {name: 'physics-pancake', language: 'JS', description: 'A 2D physics simulation'},
        {name: 'marionette', language: 'Python', description: 'A small Super Mario clone'},
        {name: 'Bezier', language: 'C#', description: 'A simple program for drawing Bezier curves'},
        {name: 'gameboy', language: 'C++', description: 'A snake and tetris clone'},
        {name: 'nes-emulator', language: 'C++', description: 'An unfinished NES emulator'},
        {name: 'pic16-tetris', language: 'C', description: 'A tetris program for a PIC microcontroller'}
    ]

    return (
        <div>
            {notableProjects.map(project => <Project {...project} />)}
        </div>
    )
}

function Project(props: { name: string, language: string, description: string }) {
    const [hovered, setHovered] = useState(false)

    function onMouseEnter() {
        setHovered(true)
    }

    function onMouseLeave() {
        setHovered(false)
    }

    return (
        <div className='project' key={props.name}>
            <a className='project-title' rel="noopener noreferrer" target="_blank"
               href={githubUrl(props.name)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {props.name}
            </a>
            <div className={'project-details ' + (hovered ? 'hovered' : '')}>
                <p>{props.language} | {props.description}</p>
            </div>
        </div>
    )
}

function githubUrl(projectName: string): string {
    return `https://github.com/ennmichael/${projectName}`
}
