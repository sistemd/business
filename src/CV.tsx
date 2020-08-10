import React from 'react'
import './css/CV.css'

export default function CV() {
    function click(selector: string) {
        (document.querySelector(selector) as any).click()
    }

    return (
        <p className='cv'>
            I am a programmer from Serbia interested in many programming languages and technologies.
            I accept freelance and remote jobs. I might accept a non-remote job if you have an office in Serbia.
            I'm currently studying electrical engineering. I am not enjoying college and find it annoying.
            I have worked and am comfortable with these web technologies: Django, TypeScript, Elm, jQuery, React, Vue,
            CSS, SCSS. I have worked on various projects in the following languages: Go, C++, C, Rust, Python, C#, JS/TypeScript.
            I have done embedded programming using C on a PIC microcontroller.
            I've also used the Lua language in the past. I have some experience with Bash and Perl, even though I
            highly dislike Perl. I work primarily in a UNIX environment, and have a good amount of experience with
            system administration and task automation. I have written and deployed both the front end and the back end
            of <a href='https://skondric.com' rel='noopener noreferrer' target='_blank'>a Serbian online electronics
            shop</a>.
            I've also worked with the Unity game engine on some toy 2D games.
            Some languages and technologies that I have little to no experience with, but am interested in are:
            ASP.NET. I am a microservice architecture enthusiast. I am a big fan of the Rust programming language.
            I don't use editors without proper VIM keybindings. My go-to editor is neovim. Make sure to check
            out the <button onClick={() => click('#github')} className='link-button'>Github tab</button>.

            <br/><br/>
            If you wish to work with me, please <button onClick={() => click('#email')} className='link-button'>send me
            an email</button>.
        </p>
    )
}
