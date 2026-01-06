"use client"

import { motion } from "framer-motion";
import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";
import FilmPhoto from "../components/shared/FilmPhoto";

const photos = [
    { photo: '/film/film1.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak ColorPlus 200" },
    { photo: '/film/film2.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak ColorPlus 200" },
    { photo: '/film/film3.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak ColorPlus 200" },
    { photo: '/film/film4.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak ColorPlus 200" },
    { photo: '/film/film5.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak ColorPlus 200" },
    { photo: '/film/film6.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak Ultramax 400" },
    { photo: '/film/film7.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 400" },
    { photo: '/film/film8.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Fuji 400" },
    { photo: '/film/film9.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film10.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 400" },
    { photo: '/film/film11.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film12.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film13.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film14.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film15.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film16.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film17.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film18.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film19.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film20.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film21.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film22.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film23.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film24.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Kodak 200" },
    { photo: '/film/film25.jpg', description: "shotbysuavee", width: 420, height: 200, filmRoll: "Fuji 400" },
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
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function Film() {
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
                                filmRoll={photoData.filmRoll}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
