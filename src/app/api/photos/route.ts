import { NextRequest, NextResponse as response } from "next/server";

import { cloudinary } from "@/lib/cloudinary";

// This is the return type of the data that is coming back from the API
type ResponseData = {
    success: boolean
    photos: PhotoData[]
    message: string
}

type PhotoData = {
    photo: string;
    description: string;
    width: number;
    height: number;
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const type = searchParams.get('type')

    if (type === null)
        return response.json({ success: false, message: "" }, { status: 400 })

    // if(type === "digital") {
    //     console.log("digital")
    // } else if(type === "film") {
    //     console.log("film")
    // }

    const result = await cloudinary.search
        .expression(`folder:${type}/*`)
        // .sort_by([{ created_at: 'desc' }])
        .max_results(100)
        .execute();

    // const result = await cloudinary.api.resources({
    //     type: 'upload',
    //     resource_type: 'image',
    //     prefix: `${type}/`,
    //     max_results: 100
    //   });

    console.log("Result of this", result)

    // Map the results to your PhotoData format
    const photos: PhotoData[] = await result.resources.map((resource: any) => ({
        photo: resource.public_id, // Use public_id for CldImage
        description: "shotbysuavee",
        width: resource.width,
        height: resource.height,
    }));

    const responseJSON: ResponseData = {
        success: true,
        photos,
        message: type || 'no type provided'
    }

    return response.json(responseJSON, { status: 200 })
}