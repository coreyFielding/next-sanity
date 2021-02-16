import React from "react"
import {GetStaticProps, GetStaticPropsResult} from 'next'
import client from "../client";
import parseData, {BlockType} from "../utils/parse-block"
import HeroBlock from "../blocks/hero-block"
import Layout from "../components/Layout";

type IndexProps = {
    blockData: any
}

const Index: React.FC<IndexProps> = ({blockData}: IndexProps): JSX.Element => {
    const blocks = new Map([
        [BlockType.HERO, HeroBlock]
    ])
  return (
    <Layout>
      <div>
          {
              blockData.map((block: any, index: any) => {
                  if (blocks.has(block.type)) {
                      const Component = blocks.get(block.type)
                      console.log(Component)
                      return (
                          <Component key={block.id} {...blocks[index]} />
                      )
                  }
              })
          }
      </div>
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
