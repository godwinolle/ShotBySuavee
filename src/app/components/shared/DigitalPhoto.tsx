'use client'
import { motion } from "framer-motion";
import Image from "next/image";

interface DigitalPhoto {
    photo: string
    description: string
    width: number
    height: number
}

export default function DigitalPhoto({ photo, description, width, height }: DigitalPhoto) {
    return (
        <div className="w-full overflow-hidden rounded-lg">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full"
            >
                <Image
                    src={photo}
                    alt={description}
                    width={width}
                    height={height}
                    className="block w-full h-auto"
                />
            </motion.div>
        </div>
    );
}

