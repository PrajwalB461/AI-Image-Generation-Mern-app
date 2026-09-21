# DALL-E Community – AI Image Generation App

DALL-E Community is a full-stack MERN application that lets users generate AI images from text prompts and share them with the community.

## Features

- Generate AI images from text prompts
- Create and share image posts
- View images shared by the community
- Download generated images
- Random prompt suggestion with **Surprise Me**
- Store posts in MongoDB
- Store images using Cloudinary
- Responsive interface using Tailwind CSS

## Screenshots

<img width="1014" height="1551" alt="Generated Images" src="https://github.com/user-attachments/assets/7b20ee59-3f95-4ef7-8db5-c4eef006a3a6" />

## Technologies Used

- React
- React Router
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- Mongoose
- OpenAI API
- Cloudinary

## Project Structure

```text
DALL-E-MERN-App/
├── client/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── constants/
│       ├── pages/
│       └── utils/
└── server/
    ├── mongodb/
    │   ├── models/
    │   └── connect.js
    ├── routes/
    └── index.js
```

## How to Run

### 1. Clone the repository

bash
git clone https://github.com/PrajwalB461/AI-Image-Generation-Mern-app.git
cd DALL-E-MERN-App


### 2. Install dependencies

Go to both the `client` and `server` folders and run:

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` folder:

```env
MONGODB_URL=your_mongodb_url
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Do not upload your `.env` file or API keys to GitHub.

### 4. Start the server

Inside the `server` folder:

```bash
npm start
```

### 5. Start the client

Inside the `client` folder:

```bash
npm run dev
```

## Author

**Prajwal Bharambe**

GitHub: [@PrajwalB461](https://github.com/PrajwalB461)

## Acknowledgements

- OpenAI API
- Cloudinary
- MongoDB
- React
- Node.js
- Express.js
- Tailwind CSS
