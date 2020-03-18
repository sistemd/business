import React, {useEffect, useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import Popover from 'react-tiny-popover'
import './css/Github.scss'
import 'devicon/devicon-colors.css'
import 'devicon/devicon.min.css'
import axios from 'axios'
import HoverPopover from './HoverPopover'

export default function Github() {
    const [isOpen, setIsOpen] = useState(false)
    const [projects, setProjects] = useState<readonly GithubProject[]>([])

    useEffect(() => {
        (async () => setProjects(await getNotableProjects()))()
    }, [])

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>GITHUB</Button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <BriefDescription/>
                <NotableProjectsList projects={projects}/>
            </Modal>
        </>
    )
}

interface GithubProject {
    url: string
    name: string
    description: string
    language: string
}

async function getNotableProjects() {
    const notableProjects = [
        {path: 'ennmichael/physics-pancake', language: 'ts'},
        {path: 'ennmichael/marionette', language: 'python'},
        {path: 'ennmichael/Bezier', language: 'c#'},
        {path: 'ennmichael/gameboy', language: 'c++'},
        {path: 'ennmichael/nes-emulator', language: 'c++'},
        {path: 'ennmichael/pic16-tetris', language: 'c'}
    ]

    return Promise.all(notableProjects.map(async ({path, language}) => {
        const {data: repo} = await axios.get(`https://api.github.com/repos/${path}`, {
            headers: {'Accept': 'application/vnd.github.v3+json'}
        })

        return {
            url: repo['html_url'],
            name: repo['name'],
            description: repo['description'],
            language
        }
    }))
}

function BriefDescription() {
    return <></>
}

function NotableProjectsList({projects}: { projects: readonly GithubProject[] }) {

    return (
        <div>
            {projects.map(project => (
                <HoverPopover
                    key={project.name} className="project"
                    content={<p>{project.description}</p>} position="right"
                >
                    <a rel="noopener noreferrer" target="_blank" href={project.url}>
                        <LanguageIcon language={project.language}/>
                        {project.name}
                    </a>
                </HoverPopover>
            ))}
        </div>
    )
}

function LanguageIcon({language}: { language: string }) {
    const iconClasses: { [key: string]: string } = {
        'python': 'devicon-python-plain',
        'c#': 'devicon-csharp-plain',
        'c++': 'devicon-cplusplus-plain',
        'c': 'devicon-c-plain',
        'ts': 'devicon-typescript-plain',
        'elm': 'devicon-elm-plain'
    }

    return <i className={`${iconClasses[language]} colored`}/>
}
