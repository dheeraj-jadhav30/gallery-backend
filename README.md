# Gallery Backend API

A simple RESTful backend application built using **Node.js**, **Express.js**, and **MongoDB**.

This project allows users to upload image posts, retrieve posts, update captions, and delete posts. Images are uploaded using **Multer** and stored using an external image storage service.

---

## 🚀 Features

- Create a new post with an image and caption
- Fetch all posts
- Fetch a single post by ID
- Update a post caption
- Delete a post
- Image upload using Multer
- MongoDB integration using Mongoose
- CORS enabled for frontend integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- CORS
- ImageKit (or your configured image storage service)

---

## 📁 Project Structure

```
gallery-backend/
│
├── models/
│   └── post.model.js
│
├── services/
│   └── storage.services.js
│
├── app.js
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/gallery-backend.git
```

Move into the project directory

```bash
cd gallery-backend
```

Install dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## ▶️ Running the Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

The server will start on

```
http://localhost:3000
```

---

# API Endpoints

## Create Post

**POST**

```
/create-post
```

### Form Data

| Key | Type |
|------|------|
| image | File |
| caption | String |

### Success Response

```json
{
  "msg": "post created successfully",
  "post": {
    "_id": "...",
    "url": "...",
    "caption": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

---

## Get All Posts

**GET**

```
/posts
```

### Success Response

```json
{
  "msg": "posts fetched successfully",
  "posts": []
}
```

---

## Get Single Post

**GET**

```
/posts/:id
```

### Success Response

```json
{
  "msg": "post fetched successfully",
  "post": {}
}
```

---

## Update Post Caption

**PATCH**

```
/posts/:id
```

### Request Body

```json
{
  "caption": "Updated Caption"
}
```

### Success Response

```json
{
  "success": true,
  "message": "post updated successfully",
  "data": {}
}
```

---

## Delete Post

**DELETE**

```
/posts/:id
```

### Success Response

```json
{
  "success": true,
  "message": "post deleted successfully",
  "data": {}
}
```

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

## Current Version

### Version 1.0

Implemented:

- Create Post
- Get All Posts
- Get Single Post
- Update Post Caption
- Delete Post

---

## Future Improvements

- User Authentication (JWT)
- Multiple Users
- Like and Unlike Posts
- Comments
- Search Posts
- Pagination
- Image Validation
- Input Validation
- Centralized Error Handling
- Logging
- Unit & Integration Tests

---

## Author

Developed by **Dheeraj** as part of a backend development learning journey.