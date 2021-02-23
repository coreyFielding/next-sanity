import client from '../../client'
import React from 'react'
import Layout from '../../components/Layout'
import PageBuilder from '../../pages/pageBuilder'
import HeroBlock from "../../blocks/hero-block"
import AboutProjectBlock from "../../blocks/about-project-block"
import parseData, {BlockType} from "../../utils/parse-block"
import {GetStaticProps, GetStaticPaths, GetStaticPropsResult} from 'next'

type ProjectProps = {
    blockData: any
}

const Project: React.FC<ProjectProps> = ({blockData}: ProjectProps) => {
    const blocks = new Map([
        [BlockType.HERO, HeroBlock],
        [BlockType.ABOUT_PROJECT, AboutProjectBlock],
    ])
    return (
        <Layout>
            <section>
                <PageBuilder blockMap={blocks} data={blockData}/>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({params}: any): Promise<GetStaticPropsResult<ProjectProps>> => {
    const {slug = ''} = params

    const data = await client.fetch(`
        *[_type == "project" && slug.current == $slug][0]
    `, {slug})

    const blockData: any = data.blocks.map((block: any) => parseData(block))
    return {
        props: {
            blockData
        }
    }
}
export const getStaticPaths: GetStaticPaths = async (): Promise<any> => {
    return {
        paths: [
            {params: {slug: 'clearabee'}}
        ],
        fallback: false
    }
}

export default Project