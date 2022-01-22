import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];
// const tweets = [
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "1"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "2"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "3"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "4"
//     },
//     {
//         username: "gruli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "5"
//     },
//     {
//         username: "gruli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "6"
//     },
//     {
//         username: "gruli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "7"
//     },
//     {
//         username: "gruli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "8"
//     },
//     {
//         username: "gruli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "9"
//     },
//     {
//         username: "gruli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "10"
//     },
//     {
//         username: "bobesponja",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "11"
//     },
//     {
//         username: "bobesponja",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "12"
//     },
//     {
//         username: "bobesponja",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "13"
//     },
//     {
//         username: "bobesponja",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "14"
//     },
//     {
//         username: "bobesponja",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "15"
//     },
//     {
//         username: "bobesponja",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "16"
//     },
//     {
//         username: "bobesponja",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "17"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "18"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "19"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "20"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "21"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "22"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "23"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "24"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "25"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "26"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "27"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "28"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "29"
//     },
//     {
//         username: "growli",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "30"
//     },
// ];

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
    username = (req.get('User'));
    if (username === '' || tweet.tweet === '') {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        const tweetWithAvatar = { ...tweet, avatar, username };
        tweets.push(tweetWithAvatar);
        res.status(201).send("OK");
    }
});

app.get('/tweets', (req, res) => {
    const page = parseInt(req.query.page);
    if (page < 1) {
        res.status(400).send("Informe uma página válida!");
    } else if (page === 1) {
        res.send(tweets.slice(-10));
    } else {
        res.send(tweets.slice(-(page * 10), -((page - 1) * 10)));
    }
});

app.get('/tweets/:username', (req, res) => {
    res.send(tweets.filter(obj => obj.username === req.params.username));
})

app.listen(5000);