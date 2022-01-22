import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];
let avatar;
let username;

app.post('/sign-up', (req, res) => {
    const user = req.body;
    if (user.username === '' || user.avatar === '') {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        avatar = user.avatar;
        username = user.username;
        users.push(user);
        res.status(201).send("OK");
    }
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    if (tweet.username === '' || tweet.tweet === '') {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        const tweetWithAvatar = { ...tweet, avatar };
        tweets.push(tweetWithAvatar);
        res.status(201).send("OK");
    }
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(-10));
});

app.get('/tweets/:username', (req, res) => {
    res.send(tweets.filter(obj => obj.username === req.params.username));
})

app.listen(5000);