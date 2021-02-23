import React, {FC} from 'react'

type FadeMountProps = {
    classes: any
    children: any
    duration?: number
    delay?: number
    float?:boolean
}
const FadeMount: FC<FadeMountProps> = ({
    classes,
    children,
    duration=1000,
    delay=0,
    float=false
}) => (
    <div className={`wrapper ${classes}`} style={{animationDuration: duration + 'ms', animationDelay: delay + 'ms'}}>
        {children}
        <style jsx>{`
        keyframes FadeIn {
            0% {
                opacity: 0;
                transform: translate(0, 0)
            }
            100% {
                transition: opacity 1000ms ease-out, transform 600ms ease-out
                transform: translate(0, 10px)
                opacity: 1
            }
        }
        .wrapper {
            @media (prefers-reduced-motion: no-preference) {
                animation-name: FadeIn};
                animation-fill-mode: backwards;
            }
        }
        `}</style>
    </div>
)

export default FadeMount