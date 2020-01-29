const express = require('express'); // Definindo variavel e importando express dentro da variável
const mongoose = require('mongoose');
const cors = require ('cors');


const app = express(); // Definindo uma função

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    'mongodb+srv://goweek:goweek123@omnistack5-backend-beegj.azure.mongodb.net/test', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});

