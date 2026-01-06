"use client"

import { motion } from "framer-motion";
import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";
import DigitalPhoto from "../components/shared/DigitalPhoto";

interface PhotoData {
    photo: string;
    description: string;
    width: number;
    height: number;
}

const photos: PhotoData[] = [
    // Add your digital photos here
    // { photo: '/digital/digital1.jpg', description: "shotbysuavee", width: 420, height: 200 },
    { photo: '/film/film1.jpg', description: "shotbysuavee", width: 420, height: 200 },
    { photo: '/film/film1.jpg', description: "shotbysuavee", width: 420, height: 200 },
    { photo: '/film/film1.jpg', description: "shotbysuavee", width: 420, height: 200 },
    { photo: '/film/film1.jpg', description: "shotbysuavee", width: 420, height: 200 },
    { photo: '/film/film1.jpg', description: "shotbysuavee", width: 420, height: 200 },
];

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

export default function Digital() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {photos.map((photoData, index) => (
                        <motion.div
                            key={`${photoData.photo}-${index}`}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="cursor-pointer"
                        >
                            <DigitalPhoto 
                                photo={photoData.photo}
                                description={photoData.description}
                                width={photoData.width}
                                height={photoData.height}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}