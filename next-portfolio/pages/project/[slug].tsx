import client from '../../client'
import React from 'react'
import Layout from '../../components/Layout'
import {GetStaticProps, GetStaticPaths, GetStaticPropsResult} from 'next'

type ProjectProps = {
    projectData: {
        title: string
    }
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
    console.log(props)
    return (
        <Layout>
            <section>test</section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({params}: any): Promise<GetStaticPropsResult<ProjectProps>> => {
    const {slug = ''} = params

    const projectData = await client.fetch(`
        *[_type == "project" && slug.current == $slug][0]
    `, {slug})

    return {
        props: {
            projectData
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