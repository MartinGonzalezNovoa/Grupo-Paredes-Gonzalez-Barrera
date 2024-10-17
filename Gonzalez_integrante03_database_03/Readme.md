# Enterga 2 explicación de datos

Martín González

1. Explicación 

Para construir la base de datos de todos los jugadores de fútbol chilenos que juegan en primera división de cualquier liga del mundo, lo que hicimos fue lo siguiente. 

Primero los datos los tuvimos que extraer de páginas web especializadas en fútbol. Las bases de datos de estas páginas web son privadas, por lo que no pudimos descargar directamente la información. Es por esto que tuvimos que utilizar un "Scraper" para poder extraer toda la información. 

Para esto, descargué una libreria que encontré a través de un video en youtube, llamada LanusStats. En esta librería hay diferentes páginas de fútbol como Fbref, FotMob, 365 Scores, SofaScore y Transfermarkt. 

En cada una de estas páginas web, la librería tiene ceirtos códigos que cumplen ciertas funciones, como por ejemplo: scrapear información de los equipos, jugadores, temporadas de equipos, estadísticas, etc. 

Para lograr esto descargué la librería en Google Collab, con el siguiente código:

pip install LanusStats
pip install --upgrade LanusStats

Despupés importé la página web que quería usar, por ejemplo de Fbref:

import LanusStats as ls  
fbref = ls.Fbref()

Después ejecuté el código según la función que necesitaba, en mi base de datos como necesitaba la estadística de todos los jugadores chilenos de las diferentes ligas, fui descargando liga por liga todos los jugadores. Por lo tanto un codigo de ejemplo sería el siguiente:

fbref = ls.Fbref()
equipos = fbref.get_all_player_season_stats("Primera Division Chile", "2023", save_csv=False)

En la primera línea se pone la página web que quiero usar, en la segunda línea le asigno un térimno al código, en este caso "equipos", y despues vuevlo a poner la página web, en este caso "fbref".

Una vez ejecutado el código, lo paso a formato csv. En este caso el codigo no me dejó pasarlo directamente a csv porque no tenía formato pandas, por lo que le pedí a la IA de Google Collab que escribiera un código para cambiar el formato, en este caso fue el siguiente:

import pandas as pd
# Assuming the desired DataFrame is the first element of the tuple
equipos_df = equipos[0]  # or equipos[1], depending on which DataFrame you want to save
# Now you can save the DataFrame to a CSV file
equipos_df.to_csv("equipos_chilenos.csv", encoding="utf-8", index=False)

Una vez hecho esto, descargué el archivo en formato csv, y lo abrí desde Excel. Ya en Excel, lo único que necesitaba limpiar fue todos los jugadores de las ligas que no son chilenos, por lo que simplemente en la columna B donde dice "stats_Nations" filtré por jugadores chilenos, en este caso denominados como "cl CHI"

En mi base de datos, decidí usar sólo la página web Fbref, ya que antes utilicé Sofascore y Transfermarkt, esta útlima entregó los datos desactualizados e incorrectos. Además, Fbref me entregó la nacionalidad, equipo, liga y todas las estadísticas de la temporada 2023. En cambio Sofascore y Transfermarkt me entregó la información por separada. 

Link a librería de LanusStats: https://github.com/federicorabanos/lanusStats?tab=readme-ov-file#sofascore
Link a Fbref: https://fbref.com/es/
Link a Sofascore: https://www.sofascore.com/es/
Link a: https://www.transfermarkt.es/detailsuche/spielerdetail/suche/51169443

Ejemplos de preguntas que le podemos hacer a la base de datos:

Lo fundamental en nuestro trabajo es analizar como influye una agencia de representación en la carrera de un jugador. Es por esto que la base de datos que construíl, se le puede consultar por estadísticas de la temporada 2023, como goles, asistencias, minutos jugados, tarjetas amarillas, etc. Pero el verdadero valor se dará cuando fusionemos las diferentes bases de datos para hacer un match entre los jugadores y su agencia de representación y la evolución de sus estadísticas, valor de mercado, traspaso a otros clubes cuando es representado por una agencia de representación. Y lo mismo en caso contrario, si un jugador no tiene agencia de represetnación. 

También he de mencionar, que en la organización del grupo me centré en la labor de scrapear toda la información, mas que en la limpieza de la base de datos.    