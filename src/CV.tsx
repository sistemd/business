import React, {useState} from 'react'
import Button from './Button'
import Modal from './Modal'

export default function CV() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>CV</Button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <CVContent/>
            </Modal>
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
