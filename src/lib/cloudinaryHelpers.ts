import { cloudinary } from "./cloudinary";

export interface PhotoData {
    photo: string;
    description: string;
    width: number;
    height: number;
    url: string;
    filmRoll?: string;
}

async function getPhotos(type: string): Promise<PhotoData[]> {
    const result = await cloudinary.search
        .expression(`folder:${type}/*`)
        .with_field('context')
        .sort_by('public_id', "desc")
        .max_results(100)
        .execute();

    return result.resources.map((resource: any): PhotoData => ({
        photo: resource.public_id, // Use public_id for CldImage
        description: "shotbysuavee",
        width: resource.width,
        height: resource.height,
        url: resource.url,
        ...(type !== "digital" && { filmRoll: resource.context?.filmRoll || ""  })
    }));
}

export { getPhotos }