import React from 'react'
import ExternalLink from "./ExternalLink"
import './css/CV.css'

export default function CV() {
    function click(selector: string) {
        (document.querySelector(selector) as any).click()
    }

    return (
        <p className='cv'>
            <br/>
            I am a programmer from Serbia interested in many programming languages and technologies.
            I accept freelance and remote jobs. I might accept a non-remote job if you have an office in Serbia.
            I used to study electrical engineering, but dropped out to focus completely on programming.
            <br/>
            <br/>
            I have worked and am comfortable with these web technologies: Django, TypeScript, JavaScript, Elm, jQuery,
            React, Vue, CSS, SCSS, ASP.NET Core, Blazor, Express, Rocket (Rust framework), Actix (Rust framework).
            I have worked on various projects in the following languages:
            Go, C++, C, Rust, Python, C#, JS/TypeScript. I have worked on some web scrape and data extraction jobs using
            Go (colly), TypeScript (pupeteer, cheerio) and Python (Scrapy).
            <br/>
            <br/>
            I have done embedded programming using C on a PIC microcontroller.
            <br/>
            <br/>
            I've also used the Lua language in the past. I have some experience with Bash and Perl, even though I
            highly dislike Perl. I work primarily in a UNIX environment, and have a good amount of experience with
            system administration and task automation. I have some experience with Kubernetes, Helm and Terraform.
            <br/>
            <br/>
            I have written and deployed both the front end and the back end
            of <ExternalLink href='https://skondric.com'>a Serbian online electronics shop</ExternalLink>. I have worked
            on user libraries, documentation and front-end code
            for <ExternalLink href='https://publit.io'>Publitio</ExternalLink>, a cloud media management website similar
            to <ExternalLink href='https://cloudinary.com/'>Cloudinary</ExternalLink>.
            <br/>
            I've worked on <ExternalLink href="https://avif.io">avif.io</ExternalLink>, completely implementing the
            functionality. Avif.io is a file conversion tool, used to convert various file formats
            into <ExternalLink href="https://en.wikipedia.org/wiki/AV1#AV1_Image_File_Format_(AVIF)">AVIF</ExternalLink>.
            It does this entirely inside the browser, using WASM binaries compiled from Rust. You can see an older
            version of the source code <ExternalLink href="https://github.com/ennmichael/avif.io">here</ExternalLink>.
            <br/>
            <br/>
            I've also worked
            a lot with the Unity game engine on some 2D games.
            <br/>
            <br/>
            I am a microservice architecture enthusiast. I am a big fan of the Rust programming language and .NET.
            I don't use editors without proper VIM keybindings. My go-to editor is neovim. Make sure to check
            out the <button onClick={() => click('#github')} className='link-button'>Github tab</button>.
            <br/>
            <br/>
            I am currently working for an outsourcing company in Serbia. Indirectly I work
            for <ExternalLink href="https://www.embracecloud.nl/?lang=en">Embrace</ExternalLink>.
            My day-to-day tasks include mostly ASP.NET Core and Node.js (TypeScript).
            I also have a lot of exposure to GraphQL - the Node.js server which I maintain exposes a GraphQL interface.
            <br/>
            <br/>
            If you wish to work with me, please <button onClick={() => click('#email')} className='link-button'>
            send me an email</button>.
        </p>
    )
}
