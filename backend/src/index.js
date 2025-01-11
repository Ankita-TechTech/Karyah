import express from 'express';
import {getAllUsers, getUser, createUser} from './db.js'
const app = express();
const PORT = 8080;

app.get("/users", async (req, res) => {
    const users = await getAllUsers()
    res.send(users);
})

app.use((err, req, res, next) => {
    console.err(err.stack);
    res.status(500).send('Something went wrong!')
})

app.listen(PORT, () => {
    console.log(`Server is started at Port No. ${PORT}..`);
})