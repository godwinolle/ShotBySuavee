import { v2 as cloudinary } from 'cloudinary';

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
const cloudinaryCloudApiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET as string;

cloudinary.config({
    cloud_name: cloudinaryCloudName,
    api_key: cloudinaryCloudApiKey,
    api_secret: cloudinaryApiSecret,
})

export { cloudinary }