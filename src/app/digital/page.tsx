import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";

import PhotoGrid from "./PhotoGrid";

import { getPhotos } from "@/lib/cloudinaryHelpers";

export default async function Digital() {
    const digitalPhotoData = await getPhotos("digital")

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <PhotoGrid photos={digitalPhotoData} />
            </main>
            <Footer />
        </div>
    );
}