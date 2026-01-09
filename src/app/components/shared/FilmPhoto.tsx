'use client'
import { motion } from "framer-motion";
import { CldImage } from 'next-cloudinary';

interface FilmPhoto {
    photo: string
    description: string
    width: number
    height: number
    filmRoll?: string
    url: string
}

const cloudName: string = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string

const config = {
    cloud: {
        cloudName: cloudName
    }
}

export default function FilmPhoto({ description, width, height, filmRoll, url }: FilmPhoto) {
    const filmFont: string = 'text-[10px]'

    const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    return (
        <div className="inline-block rounded-2xl overflow-hidden bg-black w-full">
            <div className="grid grid-cols-[12px_1fr_12px] grid-rows-[10px_auto_10px]">
                <motion.div
                    className="col-start-2 row-start-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
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
                        onContextMenu={ handleContextMenu }
                        className="block w-full h-auto"
                    />
                </motion.div>

                {/* Right gutter text (inside the border) */}
                <motion.div
                    className="col-start-3 row-start-2 flex flex-col items-center justify-between py-12 cursor-default"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.span
                        className={`text-orange-400 ${filmFont} font-sans font-medium tracking-wider [writing-mode:vertical-rl]`}
                        whileHover={{ opacity: 0.7 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-orange-400"
                        >
                            <polygon points="12,18 8,6 16,6" />
                        </svg>
                    </motion.span>
                    <span className={`text-orange-400 ${filmFont} font-sans font-medium tracking-wider [writing-mode:vertical-rl]`}>
                        {filmRoll}
                    </span>
                    <span className={`text-orange-400 ${filmFont} font-sans font-medium tracking-wider [writing-mode:vertical-rl]`}>

                    </span>
                    <span className={`text-orange-400 ${filmFont} font-sans font-medium tracking-wider [writing-mode:vertical-rl]`}>
                        Kodak AE-1
                    </span>
                </motion.div>
            </div>
        </div>
    );
}