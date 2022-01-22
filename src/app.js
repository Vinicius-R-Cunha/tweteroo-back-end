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
    avatar = user.avatar;
    users.push(user);
    res.send("OK");
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    const tweetWithAvatar = { ...tweet, avatar };
    tweets.push(tweetWithAvatar);
    res.send("OK");
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(-10));
});

app.listen(5000);