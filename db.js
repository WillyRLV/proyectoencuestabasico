//big query , mysql , mongo ,etc

// script.js
// document.addEventListener('DOMContentLoaded', function () {
//     runQuery();

//   });
  
//   function runQuery() {
//     // Carga las credenciales desde el archivo JSON de la cuenta de servicio
//     var key = require('/proyectooslo-390616-62a5ba37b02a.json'); // Cambia por la ruta correcta
  
//     // Configura la autenticación
//     const { google } = require('googleapis');
//     const jwtClient = new google.auth.JWT(
//         key.client_email,
//         null,
//         key.private_key,
//         ['https://www.googleapis.com/auth/bigquery']
//     );
  
//     // Configura el cliente de BigQuery
//     const bigquery = google.bigquery({
//         version: 'v2',
//         auth: jwtClient,
//     });
  
//     // Resto del código para ejecutar la consulta   

    

//   }

 
const { BigQuery } = require('@google-cloud/bigquery');
require ("dotenv").config();
// Configurar el cliente BigQuery con las credenciales
const bigquery = new BigQuery({
//   keyFilename: './proyectooslo-390616-62a5ba37b02a.json'
    keyFilename: process.env.key_bigquery 
});

// Verificar la conexión exitosa con BigQuery
(async () => {
  try {
    const datasetId = 'proyectooslo-390616'; // Cambia al nombre de tu dataset
    const dataset = bigquery.dataset(datasetId);
    await dataset.exists();
    console.log('Conexión exitosa con BigQuery');
  } catch (error) {
    console.error('Error en la conexión con BigQuery:', error);
  }
})();

module.exports = bigquery;
  