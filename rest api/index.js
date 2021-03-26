const express = require('express');
const Joi = require('joi');
const app = express();


const courses = [
    {id :1, name: 'course1'},
    {id :2, name: 'course2'},
    {id :3, name: 'course3'},
]
app.get('/',(req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    console.log(result);
})

app.post('/api/courses', (req, res)=>{
    
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('name is required and should be minimum 3 characters')
        return;
    }
    const course ={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) res.status(404).send('the course with the given id was not found');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on port ${port}...`));
