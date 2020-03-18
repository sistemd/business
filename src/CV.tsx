import React, {useState} from 'react'
import ReactModal from 'react-modal'
import Button from './Button'

export default function CV() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>CV</Button>
            <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <CVContent/>
            </ReactModal>
        </>
    )
}

function CVContent() {
    return (
        <div>
            <h2>CV-ish</h2>
            <p>
            </p>
        </div>
    )
}
