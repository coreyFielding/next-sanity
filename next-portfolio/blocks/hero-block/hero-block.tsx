import React, {FC, ReactNode} from "react";
import Button from "../../components/Button/Button"
import Image from "../../components/Image"
import FadeMount from "../../components/animation/FadeMount"
import classnames from 'classnames'

type HeroTextProps = {
    title: any
    subtitle: any
}

type HeroLinkProps = {
    links: any
}

const HeroText: FC<HeroTextProps> = ({title, subtitle}): JSX.Element => {
    const heroTextClasses = classnames(
        "mx-3",
        "sm:mx-0",
        "my-96",
    )
    return (
        <div className={heroTextClasses}>
           <h1
                className={`text-sm sm:text-center sm:${title.size} ${title.colour} mt-0 ${title.weight}`}
                style={{fontFamily: 'League Spartan'}}>
                {title.text}
            </h1>

            <h3 className={`${subtitle.size} ${subtitle.colour} ${subtitle.weight} text-left sm:text-center`}>{subtitle.text}</h3> 
        </div>
    )
}

const HeroQuicklinks: FC<HeroLinkProps> = ({links}) => (
    links.map((link: any, index: number) => (
        <Button key={index} {...link}>
            {link.text}
        </Button>
    ))
)

type HeroBlockProps = {
    title: HeroTextProps,
    subtitle: HeroTextProps,
    background: any,
    quicklinks: any[]
}
const HeroBlock: FC<HeroBlockProps> = ({ title = '', subtitle = '', background, quicklinks = [] }) => {
    const heroClasses = classnames(
        {[`bg-${background?.background_colour}`]: background?.background_colour},
        {[`${background?.gradient_direction} ${background?.background_gradient}`]: background?.background_gradient},
        "min-h-screen",
        "min-w-screen",
        "text-center",
    )

    return (
        <section>
            <div className={heroClasses}>
                <div className="absolute top-0 w-full h-full z-20">
                   <HeroText title={title} subtitle={subtitle}/>
                   <HeroQuicklinks links={quicklinks}/> 
                </div>
                {!background?.background_colour && !background?.background_gradient ? (
                    <div className="image">
                        {background?.bg_image && <Image image={background.bg_image} width={background.bg_image.width} />}
                    </div>
                ) : null}
                <style jsx>
                    {`
                        .image:before {
                            content: "";
                            position: absolute;
                            display: block;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, .4);
                        }
                    `}
                </style>
            </div>
        </section>
    )
}

export default HeroBlock