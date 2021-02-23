import {FC} from "react"
import {GetStaticProps, GetStaticPropsResult} from 'next'
import client from "../client";
import parseData, {BlockType} from "../utils/parse-block"
import Layout from "../components/Layout";
import HeroBlock from "../blocks/hero-block"
import ProjectBlock from "../blocks/project-block"
import PageBuilder from "./pageBuilder";

type IndexProps = {
    blockMap?: any
    blockData: any
}

const Index: FC<IndexProps> = ({blockData}: IndexProps): JSX.Element => {
    const blocks = new Map([
        [BlockType.HERO, HeroBlock],
        [BlockType.PROJECT, ProjectBlock]
    ])

  return (
    <Layout>
        <PageBuilder blockMap={blocks} data={blockData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<IndexProps>> => {
    const data = await client.fetch(`
        *[_type == "landing"] {
            blocks
        }
    `)

    const blockData: any = data[0].blocks.map((block: any) => parseData(block))
    return {
        props: {
            blockData
        }
    }
}

export default Index
