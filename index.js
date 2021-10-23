const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from my Second Node Server, Ok');
});


const users = [
    { id: 0, name: 'Hasan', email: 'abcd@gmail.com' },
    { id: 1, name: 'Hasib', email: 'abcdd@gmail.com' },
    { id: 2, name: 'Hasain', email: 'abcsd@gmail.com' },
    { id: 3, name: 'Alom', email: 'abgcd@gmail.com' },
    { id: 4, name: 'Ahmed', email: 'asbcd@gmail.com' },
    { id: 5, name: 'Tanim', email: 'abgcd@gmail.com' },
    { id: 6, name: 'Rahat', email: 'abycd@gmail.com' }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    //user query parrameter
        if(search){
            const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
            res.send(searchResult)
        }
        else{
            res.send(users)
        }

    res.send(users)
})


// app.METHOD
app.post('/user', (req, res) => {
    console.log('getting the post');
    res.send('Inside post')
} )

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = (req.params.id)
    const user = users[id]
    res.send(user)
    // console.log(req.params.id);
})

app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('Yummy Yummy Test in this Mangos')
})

app.get('/fruits', (req, res) => {
    res.send(['Mangos', 'Fruits', 'Apple'])
} )


app.listen(port, () => {
    console.log('Listening to', port);
})