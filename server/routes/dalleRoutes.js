import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  console.log('DALL-E POST request received');
  try {
    const { prompt } = req.body;
    console.log('Prompt:', prompt);

    const aiResponse = await openai.images.generate({
      model: 'gpt-image-1',
      prompt,
      n: 1,
      size: '1024x1024',
      // response_format: 'b64_json',
    });
     console.log('OpenAI response received');

    const image = aiResponse.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('OpenAI Error:', error);

    res.status(500).json({
      message: error?.message || 'Something went wrong',
    });
  }
});

export default router;