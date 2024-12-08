const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost://127.0.0.1:27017/employee")

app.post("/register", async (req, res) => {
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
});

app.listen (3001, () => {
    console.log("Server is running on port 3000");
})