import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";
import FilmPhotoGrid from "./FilmPhotoGrid";

import { getPhotos } from "@/lib/cloudinaryHelpers";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Film() {
    const filmPhotoData = await getPhotos("film")

    console.log(filmPhotoData)

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <FilmPhotoGrid photos={filmPhotoData} />
            </main>
            <Footer />
        </div>
    );
}
