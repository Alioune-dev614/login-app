const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeesModel = require('./models/employees'); // Assuming you have this model defined

app.use(cors({
  origin: 'https://login-app-1-dice.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

const app= express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL);

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeesModel.findOne({ email, password })
    .then(employee=>{
        if(employee){
            res.status(200).json({ message: 'Login successful', employee });
        }else{
            res.json({ message: 'Employee not found' });
        }
    })
     
})

app.post('/register', (req, res) => {
    EmployeesModel.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({ error: err.message }));
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server is running on port 3001');
})