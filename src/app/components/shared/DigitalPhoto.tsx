'use client'

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

interface DigitalPhoto {
    photo: string
    description: string
    width: number
    height: number
    url: string
}

const cloudName: string = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string

const config = {
    cloud: {
        cloudName: cloudName
    }
}

export default function DigitalPhoto({ description, width, height, url }: DigitalPhoto) {
    return (
        <div className="w-full overflow-hidden rounded-lg">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.02 }}
                className="w-full"
            >
                <CldImage
                    src={url}
                    alt={description}
                    width={width}
                    height={height}
                    config={config}
                    loading="lazy"
                    quality="auto"
                    format="auto"
                    className="block w-full h-auto"
                />
            </motion.div>
        </div>
    );
}

