import dotenv from "dotenv";
import OpenAI from "openai";
import handelAsycError from "../../handelError/handelAsycError.js";
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});export const generateImageAi = handelAsycError(async (req, res, next) => {
    const { prompt } = req.body;

    try {
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });
        // Access the first image's base64 string
        const generatedImage = response.data[0].b64_json;

        return res.status(200).json({
            success: true,
            photo: generatedImage, // Send the image as "photo"
        });
    } catch (error) {
        console.error("Error generating image:", error);
        return res.status(500).json({ success: false, error: error.message });
    }
});

