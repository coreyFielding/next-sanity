import {FC} from 'react'
import Image from '../../components/Image'
import Button, {ButtonProps} from '../../components/Button/Button'
import {badgeClasses, cardClasses} from './classes'

type ProjectStackProps = {badges: string[]}
const ProjectStack: FC<ProjectStackProps> = ({badges}): JSX.Element => (
    <div className="w-3/4 flex justify-between flex-wrap">
        {
            badges.map((badge, index: number) => (<span className={`${badgeClasses} bg-${badge.toLowerCase()}`}>{badge}</span>))
        }
    </div>
)

type ProjectCardProps = {
    title: string
    description: string
    tech_stack: {badges: string[]}
    logo: any
    link: ButtonProps
}
const ProjectCard: FC<ProjectCardProps> = ({title, description, tech_stack, logo, link}): JSX.Element => (
    <div className={cardClasses}>
        <div className="flex flex-row">
            <div className="w-1/5 my-auto">
                <Image image={logo}/>
            </div>
            <div className="px-2 w-full">
                <h1 className="text-primary font-bold text-2xl">
                    {title}
                </h1>
                <div>
                   <h3>{description}</h3>
                   <div className="mb-3">
                      <Button {...link}/> 
                   </div>
                   <ProjectStack {...tech_stack}/> 
                </div>
            </div>
        </div>
    </div>
)

type ProjectProps = {
    projects: ProjectCardProps[]
}
const Project: FC<ProjectProps> = ({projects}: any): JSX.Element => {
    return (
        <section>
            <div className="min-h-screen bg-white">
                <div className="flex flex-wrap md:flex-nowrap">
                    {
                        projects && projects.map((project: ProjectCardProps, index: number) => (
                            <ProjectCard {...project}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project