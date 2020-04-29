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
        {name: 'pic16-tetris', language: 'C', description: 'PIC microcontroller tetris'},
    ]

    return (
        <div className='github'>
            {notableProjects.map(project => <Project key={project.name} {...project} />)}
        </div>
    )
}

function Project(props: { name: string, language: string, description: string }) {
    return (
        <div className='project'>
            <a className='project-link' rel="noopener noreferrer" target="_blank" href={githubUrl(props.name)}>
                <p className='project-title'>{props.name}</p>
                <p className='project-details'>— {props.description} written in {props.language}</p>
            </a>
        </div>
    )
}

function githubUrl(projectName: string): string {
    return `https://github.com/ennmichael/${projectName}`
}
