const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeesModel = require('./models/employees'); // Assuming you have this model defined


const app= express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/employees')

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

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})