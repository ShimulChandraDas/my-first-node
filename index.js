const express = require("express");
const cors = require('cors')
const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('wow, auto can not happand')
})

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",

    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",

    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",

    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "website": "kale.biz",

    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "website": "demarco.info",

    }

]

app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase;
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);

        console.log('query', req.query);
    } else {




        res.send(users)
    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send('finding users', user)
});


app.post('/user', (req, res) => {
    console.log("request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('listening to port', port);
})