require("dotenv").config();
const Joi = require('joi');
const express = require("express");
const app = express();
app.use(express.json());


const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

//used to get a single and all courses
app.get("/", (req, res) => {
  res.send("Hello word!!!");
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

//creating 
app.post('/api/courses', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    // 400 bad request
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: value.name
  };
  courses.push(course);
  res.send(course);
});







app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id)
  );
  if (!course)
    res.status(404).send("The course with the given ID was not found");
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
