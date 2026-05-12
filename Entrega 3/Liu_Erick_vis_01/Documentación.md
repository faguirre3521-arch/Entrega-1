
# Documentación

Para esta entrega hice gráficos sobre el voto nulo en elecciones presidenciales chilenas. La idea fue comparar qué pasa con el voto nulo en primera y segunda vuelta, y mirar si en la última elección aparece un aumento más marcado.

El proceso fue bastante de prueba y error. Al principio costó llegar a un gráfico que se entendiera bien y que sirviera para contar la historia. El problema principal fue crear bien el código y no tanto encontrar la lógica del análisis. En ese sentido, la ayuda de ChatGPT fue importante para crear variables, corregir errores y probar cruces entre bases. No todos los gráficos se incluyeron porque algunos eran menos pertinentes para la crónica o complicaban la entrega en el repositorio.

Probé varios cruces, pero algunos no aportaban mucho o eran difíciles de leer. Por eso decidí trabajar con gráficos de línea, porque permiten ver mejor la evolución del voto nulo en el tiempo. La parte de procesar los datos no fue lo más difícil; lo más complicado fue guardar los archivos, ordenarlos en carpetas y subirlos bien al repositorio, especialmente por las rutas de las imágenes en Markdown.

La visualización final fue hecha en Google Colab usando Python y la librería Altair. Después se exportó en formato HTML y PNG para la entrega.

## Bases

Usé principalmente la base `Base de Datos Elecciones y Candidatos.csv`, que contiene candidatos presidenciales, años de elección, votos por candidato, votos blancos y votos nulos.

También usé `Caracterisitcas de Candidatos ID.csv`, que contiene información sobre partido, coalición e ideología de los candidatos, estó me dió otros datos, que si bien algunos aportan gráfican en parte las mismas tendencias.

Finalmente, consideré `resumen_polarizacion_chile.csv`, que sirvió como apoyo para pensar la polarización de las elecciones, especialmente en la última segunda vuelta.

Al igual que para la entrega posterior se consideraron todos los resultados presidenciales en Chile desde el año 1989 hasta 2025.

## Proceso de datos

Primero cargué las bases en Google Colab y revisé sus columnas. Luego con IA calculé el porcentaje de votos nulos sobre el total de votos emitidos, para poder comparar elecciones de distintos años.

Después separé primera y segunda vuelta, y con eso hice una visualización de línea en Altair con ayuda de IA y la IA de Google Colab. La visualización demuestra que el voto nulo aumenta en segunda vuelta, en qué años sube más y si factores como el voto obligatorio o la polarización pueden ayudar a explicar parte de ese aumento. El gráfico no demuestra una causa directa, pero sí permite ver una tendencia y ordenar mejor la pregunta de investigación.
