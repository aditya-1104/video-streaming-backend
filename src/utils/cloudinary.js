import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        
        fs.unlinkSync(localFilePath);
        return response.url;

    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
};

const deleteOnCloudinary = async (imageUrl) => {

    try {
        const urlParts = imageUrl.split('/');
        const fileWithExtension = urlParts[urlParts.length - 1]; 
        const folder = urlParts[urlParts.length - 2]; 

        const fileName = fileWithExtension.split('.')[0]; 
        const publicId = `${folder}/${fileName}`;

        const result = await cloudinary.uploader.destroy(publicId);
    
        return result;
    } catch (err) {
        throw new ApiError(500, err.message || "Error Deleting File on Cloudinary");
  }
};

export { uploadOnCloudinary , deleteOnCloudinary };
