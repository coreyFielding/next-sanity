import React, {FC} from "react";

interface IHeroTitleProps {
    text: string
    size: string
    weight: string
    colour: string
}
const HeroTitle: FC<IHeroTitleProps> = ({text, size, weight, colour}) => (
    <h1
        className={`text-lg text-left sm:text-center sm:${size} ${colour} mt-0 ${weight}`}
        style={{fontFamily: 'League Spartan'}}>
        {text}
    </h1>
)

const HeroBlock = () => {
    return (
        <section>

        </section>
    )
}

export default HeroBlock