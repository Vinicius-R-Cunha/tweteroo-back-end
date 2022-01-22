import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];
let avatar;

app.post('/sign-up', (req, res) => {
    const user = req.body;
    if (user.username === '' || user.avatar === '') {
        res.sendStatus(400);
        res.send("Todos os campos são obrigatórios!");
    } else {
        avatar = user.avatar;
        users.push(user);
        res.send("OK");
    }
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    if (tweet.username === '' || tweet.tweet === '') {
        res.sendStatus(400);
        res.send("Todos os campos são obrigatórios!");
    } else {
        const tweetWithAvatar = { ...tweet, avatar };
        tweets.push(tweetWithAvatar);
        res.send("OK");
    }
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(-10));
});

app.listen(5000);