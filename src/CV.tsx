import React from 'react'
import ExternalLink from "./ExternalLink"
import './css/CV.css'

export default function CV() {
    function click(selector: string) {
        (document.querySelector(selector) as any).click()
    }

    return (
        <p className='cv'>
            I am a programmer from Serbia interested in many programming languages and technologies.
            I accept freelance and remote jobs. I might accept a non-remote job if you have an office in Serbia.
            I'm currently studying electrical engineering.
            I have worked and am comfortable with these web technologies: Django, TypeScript, JavaScript, Elm, jQuery,
            React, Vue, CSS, SCSS, ASP.NET Core, Blazor, ExpressJS. I have worked on various projects in the following
            languages:
            Go, C++, C, Rust, Python, C#, JS/TypeScript. I have worked on some web scrape and data extraction jobs using
            Go (colly), TypeScript (pupeteer, cheerio) and Python (Scrapy).
            I have done embedded programming using C on a PIC microcontroller.
            I've also used the Lua language in the past. I have some experience with Bash and Perl, even though I
            highly dislike Perl. I work primarily in a UNIX environment, and have a good amount of experience with
            system administration and task automation. I have written and deployed both the front end and the back end
            of <ExternalLink href='https://skondric.com'>a Serbian online electronics shop</ExternalLink>. I have worked
            on user libraries, documentation and front-end code
            for <ExternalLink href='https://publit.io'>Publitio</ExternalLink>, a cloud media management website similar
            to <ExternalLink href='https://cloudinary.com/'>Cloudinary</ExternalLink>. I've also worked
            a lot with the Unity game engine on some 2D games.
            I am a microservice architecture enthusiast. I am a big fan of the Rust programming language and .NET.
            I don't use editors without proper VIM keybindings. My go-to editor is neovim. Make sure to check
            out the <button onClick={() => click('#github')} className='link-button'>Github tab</button>.

            <br/><br/>
            If you wish to work with me, please <button onClick={() => click('#email')} className='link-button'>
            send me an email</button>.
        </p>
    )
}
