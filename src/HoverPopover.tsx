import React, {useState} from 'react'
import Popover from 'react-tiny-popover'

export interface HoverPopoverProps {
    className?: string
    position?: 'right'|'left'|'top'|'bottom'
    content: JSX.Element
    children: JSX.Element
}

export default function HoverPopover(props: HoverPopoverProps) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false)

    return (
        <div
            className={props.className}
            onMouseEnter={() => setPopoverIsOpen(true)}
            onMouseLeave={() => setPopoverIsOpen(false)}
        >
            <Popover {...props} isOpen={popoverIsOpen} content={props.content}>
                {props.children}
            </Popover>
        </div>
)
}