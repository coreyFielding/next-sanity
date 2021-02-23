import {FC} from 'react'

type IndexProps = {
    blockMap?: any
    data: any
}

const PageBuilder: FC<IndexProps> = ({blockMap, data}): JSX.Element => {
    return (
        <div>
            {
                data.map((block: any, index: any) => {
                    if (blockMap.has(block.type)) {
                        const Component = blockMap.get(block.type)
                        return (
                            <Component key={`${block.id}${index}`} {...block} />
                        )
                    }
                })
            }
        </div>
    )
}


export default PageBuilder