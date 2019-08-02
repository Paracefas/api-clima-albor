# alborForecast
api para consumir servicios de terceros relacionados a datos climaticos

## Para uso público
Se cuenta con dos rutas /api que redirecciona a una simple respuesta html 
que nos indica que el servidor está corriendo. Luego para su uso específico 
se debe hacer un get a ```api/${lat}&${lon}&${alborApiKey}```. Dónde alborApiKey es 
una clave random generada, siendo la única esta: 
>111111111111

### La estructura de llamada sería la siguiente:

>http://api-clima-albor.herokuapp.com/api/${lat}&${lon}&${alborApikey}

### Y un ejemplo de llamada con las coordenadas de la ciudad de Mar del Plata:

>http://api-clima-albor.herokuapp.com/api/-37.9809777&-57.6099105&${alborApiKey}

## Para uso interno:
### En caso de que se requiera hacer un cambio de API climática:
#### Se debe implementar una clase que satisfaga a la siguiente especificación :
