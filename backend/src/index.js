import express from 'express';
import cors from 'cors';
import {getAllUsers, getUser, createUser} from './db.js'
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(cors());

app.get("/users", async (req, res) => {
    const users = await getAllUsers()
    res.send(users);
})

app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user);
})

app.post("/users", async (req, res) => {
    const { name, mobile, email } = req.body
    const user = await createUser(name, mobile, email)
    res.status(201).send(user)
})

app.use((err, req, res, next) => {
    console.err(err.stack);
    res.status(500).send('Something went wrong!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
})