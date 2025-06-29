# 🎬 Video Streaming Backend

A backend system built for a video streaming application using **Node.js**, **Express.js**, and **MongoDB**.  
This project is designed as a learning-oriented backend architecture with features commonly found in real-world platforms like YouTube.

---

## 🚀 Features Implemented

### ✅ Authentication & Authorization
- JWT-based auth with access and refresh token handling.
- Secure cookies and token rotation.
- Password hashing using **bcrypt**.
- Auth middleware for protected routes.

### 👤 User Module
- Signup / Login / Logout APIs
- Password reset and update
- User profile with avatar support (via Cloudinary)

### 📹 Video Module
- Upload, update, delete videos
- Video metadata storage (title, description, thumbnail, duration)
- File handling with **Multer** and **Cloudinary** for scalable media storage

### ❤️ Likes, 📁 Playlists, and 🔔 Subscriptions
- Like and unlike videos
- Create and manage custom playlists
- Subscribe/unsubscribe to other creators
- Aggregation pipelines to:
  - Count likes
  - Fetch playlist videos
  - Get subscriber count and feed

### 📦 File Upload System
- Handled via **Multer** (for buffering) and **Cloudinary** (for storage)
- Supports thumbnail and video uploads
- Secure and scalable media handling

### 🧩 MongoDB Aggregation Pipelines
- Efficient queries for:
  - Popular videos
  - User-specific playlists
  - Like/subscription counts
  - Fetching creator feed

### 🧠 Models Implemented
- `User`: handles auth, subscriptions, and user info
- `Video`: stores all video-related data
- `Like`: for managing user-video like status
- `Playlist`: user's saved collections
- `Subscription`: creator-follower relationship

---

## 🗂 Standard Project Structure

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for token management
- **Bcrypt** for password hashing
- **Multer** for file handling
- **Cloudinary** for media storage
- **Cookie-parser**, **dotenv**, **cors**

---

## 📌 Upcoming Enhancements
- Comment section with nested replies
- Watch history and recommendations
- Notifications for new uploads
- Admin dashboard for content control

---

## 🧪 Installation & Setup

```bash
git clone https://github.com/yourname/video-streaming-backend.git
cd video-streaming-backend
npm install

create a .env file and add

PORT=3000
MONGODB_URI=""
CORS_ORIGIN=""
ACCESS_TOKEN_SECRET=""
ACCESS_TOKEN_EXPIRY=""
REFRESH_TOKEN_SECERT=""
REFRESH_TOKEN_EXPIRY=""
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECERT=""

start the dev server :
npm run dev
