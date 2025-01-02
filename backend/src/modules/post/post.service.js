import { v2 as cloudinary } from 'cloudinary';
import { CreateError } from '../../handelError/error.js';
import handelAsycError from '../../handelError/handelAsycError.js';
import postModel from '../../database/models/post.model.js';
import dotenv from 'dotenv';
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
});


export const getAllPosts = handelAsycError(async (req, res, next) => {
    const posts = await postModel.find({})
    if (posts) {
        return res.status(200).json({ success: true, data: posts })
    }
    next(CreateError(404, 'No post found'))
})
export const createPost = async (req, res, next) => {
    try {
        const { name, prompt, photo } = req.body;

        // Upload the photo to Cloudinary and extract the secure URL
        const { secure_url } = await cloudinary.uploader.upload(photo, { folder: 'posts' });

        // Create the post in the database using the secure URL
        const post = await postModel.create({ name, prompt, photo: secure_url });

        if (post) {
            return res.status(201).json({ success: true, data: post });
        }

        // If post creation fails
        throw CreateError(404, 'No post added');
    } catch (error) {
        // Pass the error to the next middleware
        next(error);
    }
};
