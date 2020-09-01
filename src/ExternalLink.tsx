import React from "react";

export interface ExternalLinkProps {
    children: any
    href: string
    className?: string
}

export default function ExternalLink(props: ExternalLinkProps) {
    return <a className={props.className} href={props.href} rel='noopener noreferrer'
              target='_blank'>{props.children}</a>
}
