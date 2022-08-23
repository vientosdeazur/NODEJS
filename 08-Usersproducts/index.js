require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
app.use(express.json());


app.get('/', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Juan'
        },
        {
            id: 2,
            name: 'Pedro'
        }
    ]
  
  
    res.status(200).json(users);
})


app.post('/users/', (req, res) => {
    
  
    const user = req.body;
    user.id = 47 ;
  
    const result = {
        message: 'User Created',
        user  
      }
    res.status(201).json(result);
  })


app.put('/users/:id', (req, res) => {

    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User Modified',
        user
    }
    res.json(result);
  })


app.patch('/users/:id', (req, res) => {

    const {id} = req.params;
    const user = req.body;
    user.id = id;

    const result = {
        message: 'User Updated with patch',
        user
    }

    res.json(result);
  })


app.delete('/users/:id', (req, res) => {

    const {id} = req.params;

    const result = {
        message: ` User with id: ${id} Deleted`
    }
    
    res.json(result);
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})