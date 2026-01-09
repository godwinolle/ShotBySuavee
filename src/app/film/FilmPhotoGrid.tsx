"use client"

import { motion } from "framer-motion"
import FilmPhoto from "../components/shared/FilmPhoto";

interface PhotoData {
    photo: string;
    description: string;
    width: number;
    height: number;
    url: string;
    filmRoll: string;
}

interface PhotoGridInterface {
    photos: PhotoData[]
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};

export default function FilmPhotoGrid({photos}: PhotoGridInterface) {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {photos.map((photoData, index) => (
                <motion.div
                    key={`${photoData.photo}-${index}`}
                    // variants={itemVariants}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                    className="cursor-pointer"
                >
                    <FilmPhoto
                        photo={photoData.photo}
                        description={photoData.description}
                        width={photoData.width}
                        height={photoData.height}
                        url={photoData.url}
                        filmRoll={photoData.filmRoll}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}