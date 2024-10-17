# ENTREGA 02 - PROCESO DE LA LIMPIEZA DE DATOS 
## Trinidad Paredes García 
1. Explicación 

Para conseguir la base de datos con respecto a los jugadores de las agencias chilenas de futbol la profesora tranformó el HTML de las tablas que mostraban los datos de los jugadores a formato csv descargable. 

La información fue extraída mediante un scrapped de la página Transfermarkt. 

### Una vez con las tablas en mano el proceso para limpiar las fuentes fue el siguiente
1. Eliminación de los jugadores de cada agencia que no pertenecieran a la categoría de primera división 
2. En cada hoja de cada agencia se filtraron a los jugadores que no contaban con primera nacionalidad chilena, se eliminaron de 
3. Se copiaron y pegaron los datos de cada agencia en una hoja a la que se nombró como "agencias" para contar con estos en un solo lugar
4. Después se eliminó la fila correspondiente a "opción de contrato" ya que no se contemplará para análisis futuro 
5. finalmente se realizó una tabla dinámica cruzando los datos de jugadores con la agencia a la que pertenecer para saber cuántos integrantes hay en cada una

## Preguntas que se pueden responder con la base de datos: 
1. ¿Cómo varía el valor de mercado según la edad de los jugadores?
2. ¿Cuál es el jugador más joven y cuál es el más viejo?
3. ¿Cuántos jugadores están representados por cada agencia?
4. ¿Cómo afecta la agencia de un jugador a su negociación y valor de mercado?