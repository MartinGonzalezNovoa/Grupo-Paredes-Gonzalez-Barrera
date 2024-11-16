# Martín González

Primero analicé mi base de datos y la información que esta me entrega, en mi caso usé la base de datos donde muestra a todos los jugadores de la primera división chilena que sean chilenos, y en un principio tuvo como objetivo usar 3 estadísticas que me ayuden a reflejar un aspecto básico en de los jugadores, que es la cantidad de partidos jugados, cantidad de partidos como titular y cantidad de minutos jugados. 

Para lograr representar esto, en un primer momento quise hacer un índice en base a estas tres estadísticas y asignarle un valor a cada una, siendo la cantidad de minutos la estadísticas más importante, cantidad de partidos jugados como la medianamente importante, y cantidad de partidos como titular la menos importante. Fue así como primero me instruí en los aspectos más básicos de Vega Altair, donde busqué un tutorial en Youtube para entender el lenguaje de programación. Una vez entendido esto, me di cuenta que es complejo hacer el gráfico desde 0 teniendo tantos datos, por lo que decidí usar Chat-GPT. Como estudié brevemente Vega Altair mis prompt fueron más precisos y pude obtener buenos resultados rápidamente. 

Estos fueron mis Prompt: 

 Necesito que generes un gráfico con Altair, donde muestre según cada equipo (es decir la columna D "stats_Squad") qué jugadores tienen mejor estadísticas de rendimiento deportivo, para esto genera un índice según la columna I, J, L y M. En cada una de estas columnas muestra una estadística diferente del jugador, pero todas tienen en común que mientras más alto sea el número quiere decir que el jugador tuvo un mejor rendimiento. El gráfico tiene que ser de dispersión.
 
Ahora necesito saber si eres capaz de entender lo que significa cada columna en mi base de datos, para que de esta forma puedas generar un índice según cada columna que representa una estadística de cada jugador, así puedo analizar qué jugadores tuvieron mejor rendimiento
entonces ahora quiero que le pongas una nota del 1 al 10 a cada jugador que aparece en la base de datos, basado en sus estadísticas, y que después generes un gráfico en Altair de dispersión, donde se pueda ver en orden que equipo de fútbol tiene los jugadores con mejor rendimiento. Además quiero que me expliques como le asignaste una calificación a cada jugador

Ante esta solicitud Chat GPT me entregó el siguiente código:

 Instalar Altair si no está instalado
!pip install altair --quiet

 Importar librerías
import pandas as pd
import altair as alt

 Cargar los datos
file_path = "/content/Base de datos reducida.csv"  # Reemplaza con tu ruta
data = pd.read_csv(file_path, delimiter=";")

 Normalizar las estadísticas y calcular el índice de evaluación
def normalize_column(column):
    return 1 + 9 * (column - column.min()) / (column.max() - column.min())

data["MP_normalized"] = normalize_column(data["stats_MP"])
data["Starts_normalized"] = normalize_column(data["stats_Starts"])
data["Min_normalized"] = normalize_column(data["stats_Min"])
data["Evaluation_Index"] = (
    data["MP_normalized"] + data["Starts_normalized"] + data["Min_normalized"]
) / 3

 Ordenar equipos por el promedio del índice de sus jugadores
team_order = (
    data.groupby("stats_Squad")["Evaluation_Index"]
    .mean()
    .sort_values()
    .index.tolist()
)

data["stats_Squad"] = pd.Categorical(data["stats_Squad"], categories=team_order, ordered=True)

Crear el gráfico de dispersión
chart = (
    alt.Chart(data)
    .mark_circle(size=60)
    .encode(
        x=alt.X(
            "stats_Squad:O",
            sort=team_order,
            title="Equipo (ordenado por rendimiento promedio)"
        ),
        y=alt.Y("Evaluation_Index:Q", title="Índice de Evaluación"),
        color=alt.Color("stats_Squad:N", legend=None),
        tooltip=["Player", "stats_Squad", "Evaluation_Index"],
    )
    .properties(
        title="Índice de Evaluación de Jugadores por Equipo",
        width=800,
        height=400,
    )
)

chart.show()----

En un principio no me ejecutó el gráfico, por lo que me metí a la biblioteca de Altair y encontré el siguiente código que me permitió ejecutar y visualizar los gráficos. 

import altair_viewer
altair_viewer.display(chart, inline=True)

Después analicé los resultados de este gráfico y me di cuenta que eran incorrectos, porque al entregarle mi base de datos a Chat GPT, no lograba codificarla por lo que automáticamente generaba algunos cambios

Hizo estos cambios: 

Primero leeré el archivo CSV para ver su contenido y las columnas disponibles.
import pandas as pd

Ruta del archivo subido
file_path = '/mnt/data/db-final.csv'

Leer el archivo CSV
df = pd.read_csv(file_path)

Mostrar las primeras filas del DataFrame para ver cómo están estructurados los datos
df.head()

Por lo que tuve que limpiar mi base de datos para que fuese más accesible de interpretar para Chat GPT, para eso sólo dejé los datos que iba a utilizar, y además descarté generar un índice de evaluación ya que perdía precisión el proceso de datos a información. 

Finalmente, le pedí que hiciera un gráfico de dispersión que muestre por equipo los minutos disputados de cada jugador, por lo que cada punto representa a un jugador, y si uno coloca el mouse por encima podrá ver la cantidad de minutos que disputó. 

Los promt y códigos que utilicé son los siguientes: 

Necesito que crear un gráfico de dispersión en base a la libreria Altair, donde me muestre por equipo que jugadores han disputado más minutos (es decir stats_Min), quiero que los jugadores estén ordenados por equipo, y los equipos quiero que aparezcan en el eje X, y la cantidad de minutos jugados quiero que aparezca en el eje Y. El gráfico quiero correrlo en python google colab

Me entregó el siguiente código: 

import pandas as pd
import altair as alt
 Carga de datos

file_path = '/ruta/a/tu/archivo/Libro1.csv'  # Asegúrate de colocar la ruta correcta
data = pd.read_csv(file_path, delimiter=';')

 Creación del gráfico de dispersión
chart = alt.Chart(data).mark_circle(size=60).encode(
    x=alt.X('stats_Squad:N', title='Equipo', sort='-y'),
    y=alt.Y('stats_Min:Q', title='Minutos Jugados'),
    color='stats_Squad:N',
    tooltip=['Player', 'stats_Min']
).properties(
    title='Minutos Jugados por Jugadores Ordenados por Equipo',
    width=800,
    height=400
)

chart

Después copié el código, lo corrí en Google Colab y obtuve los resultados que esperaba. 
