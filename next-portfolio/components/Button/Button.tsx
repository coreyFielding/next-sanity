import React, {FC, useState} from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import setupIconLibrary from "../../utils/setup-icon-library"
setupIconLibrary()

export type ButtonProps = {
    children: ChildNode
    text: string
    url: string
    shape: string
    style: string
    colour: string
    text_colour: string
    icon: string
    hover_effect: string[]
}

const Button: FC<ButtonProps> = ({
    children,
    text,
    url,
    shape,
    text_colour,
    colour,
    style,
    hover_effect,
    icon
}) => {
    const light = ['white', 'cararra-50']
    const [hover, setHover] = useState(false)

    const buttonClasses = classnames(
        {[`${shape}`]: shape},
        {[`text-${text_colour}`]: text_colour},
        {[`${style === 'solid' ? `bg-${colour}` : style === 'outline' ?  'border-2' : ''}`]: style},
        {[`${hover_effect?.includes('fill') ? `hover:bg-${colour}` : ''}`]: hover_effect},
        {[`${hover_effect?.includes('outline') ? `bg-none hover:border-2` : ''}`]: hover_effect},
        {[`${hover_effect?.includes('shadow') ? 'hover:shadow-lg' : ''}`]: hover_effect},
        {[`${hover_effect?.includes('rise') ? 'hover:-translate-y-1' : ''}`]: hover_effect},
        `hover:${light.includes(text_colour) && light.includes(colour) ? 'text-black' : 'text-white'}`,
        `border-${colour}`,
        "duration-300",
        "p-2",
        "py-1",
        "text-sm"
    )

    return (
        <a className={buttonClasses} href={url} role="button" onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
            <span>
                {children || text}
                {hover && icon ? <FontAwesomeIcon icon={['fas', icon as any]} className="ml-2"/> : null}
            </span>
        </a>
    )
}

export default Button