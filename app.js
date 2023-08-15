const express = require('express');
const path = require('path');
const app = express();
const logger = require('morgan');


// Configuración del motor de plantillas EJS
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));
// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.render('index', { title: 'Página de inicio' });
});

// Ruta para provocar un error
app.get('/error', (req, res) => {
    throw new Error('¡Esto es un error provocado!');
});

//Ruta  Gracias
app.get('/thanks', (req, res) => {
  res.render('thanks', { title: 'Respuesta Enviada', 
    cuerpo: 'tu respuesta ha sido enviada con exito' })
});


// Manejador de errores para rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).res.render('error', {
        title: 'Página no encontrada',
        error: 'La página que buscas no existe.'
    });
});

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { title: 'Error', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});
