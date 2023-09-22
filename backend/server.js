import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/dummydata.js";

const app = express();
dotenv.config({
    path: "backend/configs/.env"
});

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.get('/api/chats', (req, res) => {
    res.send(chats)
})

app.get('/api/chats/:id', (req, res) => {
    const selectedChats = chats.find((chat) => chat._id === req.params.id)
    res.send(selectedChats)
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`))