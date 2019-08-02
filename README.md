# alborForecast
api para consumir servicios de terceros relacionados a datos climaticos

## Para uso público
Se cuenta con dos rutas /api que redirecciona a una simple respuesta html 
que nos indica que el servidor está corriendo. Luego para su uso específico 
se debe hacer un get a api/${lat}&${lon}&${alborApiKey}. Dónde alborApiKey es 
una clave random generada, siendo la única esta: 31a643f7567d41a99a715178705345d4