# MERN AI Flow — Backend (Node.js + Express + MongoDB)

Backend API server that securely connects the frontend flow UI to the AI provider and database.

This service:

* Receives user prompts from the frontend
* Requests AI-generated responses via OpenRouter
* Returns responses to the frontend
* Saves prompt/response pairs to MongoDB

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* Axios
* OpenRouter API (AI provider)
* Deployment: Render

---

## ✨ Features

* Secure backend (API key hidden from frontend)
* AI text generation via OpenRouter
* REST API endpoints
* MongoDB data persistence
* CORS-enabled for frontend access

---

## 🌐 Live Deployment

* Backend Base URL: [https://mern-ai-flow-backend-tsn6.onrender.com](https://mern-ai-flow-backend-tsn6.onrender.com)

---

## 🖥️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/aflah-bin-azeez/mern-ai-flow-backend.git
cd server
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root folder:

```
MONGO_URI=your_mongodb_connection_string
OPENROUTER_KEY=your_openrouter_api_key
```

---

## ▶ Running the Server

```bash
npm run dev
# or
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### ▶ Ask AI

Generates AI response for a prompt.

```
POST /api/ask-ai
```

**Request Body**

```json
{ "prompt": "Your question here" }
```

**Response**

```json
{ "answer": "AI generated text" }
```

---

### ▶ Save Flow

Stores prompt and AI response in MongoDB.

```
POST /api/save
```

**Request Body**

```json
{
  "prompt": "User input",
  "response": "AI output"
}
```

---

## 🧠 AI Integration (OpenRouter)

The project requirement suggested these free models:

* google/gemini-2.0-flash-lite-preview-02-05:free
* mistralai/mistral-7b-instruct:free

However, these models were unavailable or deprecated at the time of development.

✅ Working free model used in this project:

```
z-ai/glm-4.5-air:free
```

AI requests are made securely from the backend using the OpenRouter API.

---

## 🗄️ Database Schema

**Flow Model**

```js
{
  prompt: String,
  response: String,
  timestamps: true
}
```

---

## 🧭 Project Structure

```
server/
 ├─ models/
 │   └─ Flow.js
 ├─ routes/
 │   ├─ ai.js
 │   └─ save.js
 ├─ server.js
 ├─ package.json
 └─ .env
```

---

## 🌐 Deployment (Render)

1. Push repository to GitHub
2. Create new Web Service on Render
3. Connect GitHub repo
4. Add Environment Variables:

   * MONGO_URI
   * OPENROUTER_KEY
5. Deploy

---

## 🔒 Security Notes

* API keys are stored in environment variables
* AI calls are handled server-side only
* CORS enabled for frontend communication

---

## 🔗 Related Repository

Frontend repository contains the React Flow UI and user interactions.

---

## ✅ Assignment Requirements Covered

* Node.js + Express backend server
* Secure AI API integration
* MongoDB data storage
* REST API for frontend communication
* Deployed cloud backend service
