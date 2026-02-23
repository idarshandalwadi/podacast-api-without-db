# 🎙️ Podcast Episodes API

A simple REST API built with NestJS for managing podcast episodes.

This project uses an in-memory array (no database).  
Data resets when the server restarts.

---

## 🚀 Features

- Get all episodes
- Get episodes with sorting and limit
- Get single episode by ID
- Create new episode
- Update existing episode
- Delete episode
- Request validation using class-validator

---

## 📦 Tech Stack

- NestJS
- TypeScript
- Node.js
- class-validator

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Running the App

```bash
# development
npm run start:dev

# production
npm run start
```

Server runs on:

```
http://localhost:3000
```

---

# 📌 API Endpoints

## 1️⃣ Get All Episodes

```
GET /episodes
```

Example:
```
http://localhost:3000/episodes
```

---

## 2️⃣ Get All with Limit & Sorting

```
GET /episodes?limit=5&sort=asc
```

Query Parameters:

| Parameter | Type   | Description                  |
|-----------|--------|------------------------------|
| limit     | number | Number of records to return |
| sort      | asc    | Sort by year ascending      |
| sort      | desc   | Sort by year descending     |

Example:
```
http://localhost:3000/episodes?limit=5&sort=desc
```

---

## 3️⃣ Get Single Episode

```
GET /episodes/id/:id
```

Example:
```
http://localhost:3000/episodes/id/101
```

---

## 4️⃣ Create Episode

```
POST /episodes
```

Body (JSON):

```json
{
  "name": "NestJS Basics",
  "year": 2025
}
```

---

## 5️⃣ Update Episode

```
PUT /episodes
```

Body (JSON):

```json
{
  "id": 101,
  "name": "Updated Episode",
  "year": 2026
}
```

---

## 6️⃣ Delete Episode

```
DELETE /episodes/id/:id
```

Example:
```
http://localhost:3000/episodes/id/101
```

---

# ⚠️ Important Notes

- This project does NOT use a database.
- Data is stored in an in-memory array.
- Restarting the server resets all data.

---

# 🧪 Testing with Postman

You can test endpoints using:

- Postman
- Thunder Client (VS Code extension)
- curl

Example:

```bash
curl http://localhost:3000/episodes
```


---

# 👨‍💻 Author

Darshan Dalwadi
