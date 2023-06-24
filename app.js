// Imports
const cors = require('cors');
const express = require('express');

const path = require('path');
const sequelize = require('./database');

const app = express();

// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404



// Start the server
app.set('views', path.join(__dirname, 'views')); // Establece el directorio de vistas
app.set('view engine', 'ejs'); // Establece EJS como motor de vistas

app.get('/api/consulta', (req, res) => {
  // Aquí puedes realizar la lógica necesaria para obtener los datos para la vista 'consulta.ejs'
  const data = {
    // ... Datos para pasar a la vista ...
  };
  res.render('consulta', data);
});



/*
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));
}).catch((error) => {
  console.log("Error al sincronizar la base de datos", error);
});
*/

// Starting the server
app.listen(45635, () => console.log('Server on port 45635'));