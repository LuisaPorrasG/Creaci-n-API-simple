const express = require("express");
const app = express();

app.use(express.json());

//**configuraciones
app.set("port", process.env.PORT || 2000);
app.set("json spaces", 2);

//** Codificado del listen--Iniciadod el Servidor
app.listen(app.get("port"), () => {
  console.log(`Sever listen on port ${app.get("port")}`);
});

const students = [
  { id: 1, name: "Luisa", age: 20, enroll: true },
  { id: 2, name: "Juan", age: 18, enroll: true },
  { id: 3, name: "Camila", age: 22, enroll: false },
  { id: 4, name: "Esteban", age: 24, enroll: true },
];

//request

app.get("/", (req, res) => {
  //cuando ingrese a la ruta local va a salir este mensaje
  res.send("Ingresando con Node JS");
});

app.get("/api/students", (req, res) => {
  //cuando ingrese a la ruta local va a salir los estudiantes estipulados
  res.send(students);
});

app.get("/api/students/:id", (req, res) => {
  //cuando ingrese a la ruta local va a salir los estudiantes estipulados por id
  const student = students.find(c => c.id === parseInt(req.params.id));
  if (!student) 
    return res.status(404).send("Estudiante no enconstrado");
  else 
    res.send(student);
});

//agregar nuevos estudiantes
app.post("/api/students", (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name,
    age: parseInt(req.body.age),
    enroll: req.body.enroll == "true",
  };
  students.push(student);
  res.send;
  student;
});

app.delete("/api/students/:id", (req, res) => {
  const student = students.find((c) => c.id === parseInt(req.params.id));
  if (!student) {
    res.status(404).send("Estudiante no enconstrado");
  } else {
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send;
    student;
  }
});
