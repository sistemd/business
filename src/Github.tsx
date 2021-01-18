import React from 'react'
import ExternalLink from "./ExternalLink"
import './css/Github.css'

export default function Github() {
    return (
        <>
            <NotableProjectsList/>
        </>
    )
}

interface GithubProject {
    name: string
    description: string
    language: string
}

function NotableProjectsList() {
    const notableProjects = [
        {name: 'physics-pancake', language: 'JS', description: 'A 2D physics simulation'},
        {name: 'marionette', language: 'Python', description: 'A small Super Mario clone'},
        {name: 'checkers', language: 'Rust and TypeScript', description: 'A simple checkers multiplayer game for the browser'},
        {name: 'backlog', language: 'Rust', description: 'A backlog-tracking tool (WIP)'},
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

function Project(props: GithubProject) {
    return (
        <div className='project'>
            <ExternalLink className='project-link' href={githubUrl(props.name)}>
                <p className='project-title'>{props.name}</p>
                <p className='project-details'>— {props.description} written in {props.language}</p>
            </ExternalLink>
        </div>
    )
}

function githubUrl(projectName: string): string {
    return `https://github.com/ennmichael/${projectName}`
}
