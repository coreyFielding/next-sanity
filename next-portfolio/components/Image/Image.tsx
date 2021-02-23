import {FC} from 'react'
import sanityClient from "@sanity/client";
import sanityImageUrl from "@sanity/image-url";

const Image = ({image, width}: any) => {
    const client = sanityClient({
        dataset: 'production',
        projectId: '8p7swc8i'
    })
    
    const builder = sanityImageUrl(client)

    const urlFor = (src: string): any => {
        return builder.image(src)
    }

    return (
        <img src={urlFor(image.img || image.bg_img).width(width).url()} className={`${image.shape}`} />
    )
}

export default Image