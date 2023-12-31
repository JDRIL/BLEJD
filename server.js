const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la página de inicio!');
});

app.post('/meraki', (req, res) => {
    console.log('Solicitud POST recibida en /meraki');
    console.log('Datos recibidos: ', req.body);
    res.status(200).send('Datos recibidos');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
