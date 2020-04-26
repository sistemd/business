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
            {notableProjects.map(project => <Project key={project.name} {...project} />)}
        </div>
    )
}

function Project(props: { name: string, language: string, description: string }) {
    const [currentText, setCurrentText] = useState('')
    const [expectedText, setExpectedText] = useState('')
    const [showCursor, setShowCursor] = useState(false)

    useEffect(() => {
        // TODO Use requestAnimationFrame with randomness
        const id = setInterval(() => {
            if (currentText === expectedText)
                return

            if (currentText.length > expectedText.length) {
                setShowCursor(true)
                setCurrentText(t => t.substr(0, t.length - 1))
                return
            }

            if (currentText.length < expectedText.length) {
                setShowCursor(true)
                setCurrentText(t => t + expectedText[currentText.length])
                return
            }
        }, 35)

        return () => clearInterval(id)
    }, [currentText, expectedText])

    useEffect(() => {
        const id = setInterval(() => {
            if (currentText === '' && expectedText === '') {
                setShowCursor(false)
                return
            }

            if (currentText !== expectedText) {
                setShowCursor(true)
                return
            }

            setShowCursor(s => !s)
        }, 300)

        return () => clearInterval(id)
    }, [currentText, expectedText])

    function onMouseEnter() {
        setExpectedText(`${props.description} written in ${props.language}`)
    }

    function onMouseLeave() {
        setExpectedText('')
    }

    return (
        <div className='project'>
            <a className='project-title' rel="noopener noreferrer" target="_blank"
               href={githubUrl(props.name)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {props.name}
            </a>
            <div className='project-details'>
                <p>{currentText}{showCursor && '|'}</p>
            </div>
        </div>
    )
}

function githubUrl(projectName: string): string {
    return `https://github.com/ennmichael/${projectName}`
}
