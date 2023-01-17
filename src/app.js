const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Ruta raiz')
})

app.get('/saludo', (req, res) => {
    res.send('Hola a todos, pero ahora desde express!')
})

app.get('/bienvenida', (req, res) => {
    res.send('<h1> Bienvenidos alumnos de Coder! </h1>')
})

app.get('/usuario', (req, res) => {
    res.send({ nombre: "Coder", apellido: "house", edad: 23, correo: 'ch@ch.com'})
})

const server = app.listen(8080, () => console.log('Server listening on port 8080'))

server.on('error', error =>  console.log(error))