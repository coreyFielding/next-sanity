import {FC} from 'react'
import Image from "../../components/Image"
import Button from "../../components/Button/Button"

type AboutProjectProps = {
    text: string
    image: any
    link: any
}

const AboutProjectBlock: FC<AboutProjectProps> = ({ text, image, link }): JSX.Element => {
    return (
        <section>
            <div className="min-h-screen md:h-full">
                <div className="w-1/2 mt-40 mx-auto shadow-sm rounded-md text-center p-5">
                    <Image image={image.img} width={100}/>
                    <p className="font-lg">
                        {text}
                    </p>
                    <div className="mt-10">
                      <Button {...link} />  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProjectBlock