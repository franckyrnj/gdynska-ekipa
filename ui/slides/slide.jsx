'use client'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { fontSecondary } from '@/ui/fonts'
import './slide.css'
import Image from 'next/image'

export default function Slide({items})
{
    return (
        <Carousel>
            {
                items.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const heading = props.item.title.rendered;
    const description = props.item.meta.description;
    const drawing = props.item.meta.drawing;
    const photo = props.item.meta.photo;
    const descClasses = `slide-description text-lg italic ${fontSecondary.className}`;
    const btnText = props.item.meta.button_text;
    const btnClasses = "slide-button inline-block px-20 py-4 border-amber-600 hover:bg-amber-600 border hover:border-white"
    
    return (
        <div  className="slide-container" key={props.item.id}>
            <div className="slide-images">
                <Image className="slide-drawing" width="640" height="640" src={drawing} alt="" />
                <Image className="slide-photo" width="480" height="480" src={photo} alt={heading} />
            </div>
            <div className="slide-text">
                <h2 className="slide-heading">{heading}</h2>
                <p className={descClasses}>{description}</p>
                <a className={btnClasses} href="/o-nas#uslugi">
                    {btnText}
                </a>
            </div>
        </div>
        
    )
}