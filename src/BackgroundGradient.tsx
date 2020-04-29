import React from 'react'
import './css/BackgroundGradient.css'

export interface BackgroundGradientProps {
    offset: string
}

export default function BackgroundGradient(props: BackgroundGradientProps) {
    const style = {transform: `translateY(${props.offset})`}

    return (
        <div className='background-gradient' style={style}/>
    )
}