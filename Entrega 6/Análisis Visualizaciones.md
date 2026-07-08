# Análisis de visualizaciones

Las visualizaciones de ANÚLEMELO fueron desarrolladas a partir de bases de datos en formato CSV, trabajadas en Google Colab y programadas con apoyo de ChatGPT. El proceso combinó limpieza de datos, cálculo de porcentajes, generación de gráficos, exportación en HTML e integración posterior en la webstory final.

La base principal utilizada fue el CSV de resultados presidenciales por año, vuelta y región. En esa base se trabajó con variables como votos emitidos, votos válidos, votos nulos, votos blancos, año electoral, región y vuelta presidencial. A partir de esos datos se calculó el porcentaje de votos nulos y blancos sobre el total de votos emitidos, que funciona como el indicador central del proyecto.

También se utilizó una base complementaria de candidaturas presidenciales, donde se organizaron datos como candidatura, partido, coalición e ideología. Esa información permitió construir las visualizaciones relacionadas con la oferta presidencial y la polarización de las candidaturas. Esta parte fue usada como contexto político, no como una prueba causal directa sobre el comportamiento del voto nulo o blanco.

El trabajo técnico se realizó en Google Colab. Allí se cargaron los CSV, se limpiaron nombres de regiones, se ordenaron años y vueltas, se calcularon porcentajes y se generaron distintas versiones de gráficos. Los códigos utilizados para ese proceso fueron construidos con apoyo de ChatGPT, especialmente para resolver la estructura de los gráficos, corregir errores de programación, automatizar la exportación de archivos HTML y ajustar la forma en que las visualizaciones serían incorporadas al sitio.

No todos los gráficos fueron pensados desde el inicio en el mismo orden en que aparecen en la webstory final. Primero se produjeron varias visualizaciones exploratorias y luego se seleccionaron las que mejor ayudaban a contar la historia. Después, esas visualizaciones fueron ordenadas dentro del relato para que avanzaran desde una mirada general hacia una lectura más específica del fenómeno.

Los gráficos finales fueron exportados desde Colab en formato HTML. Luego se incorporaron a la carpeta `docs/graficos0/` y fueron integrados en la webstory mediante elementos `iframe`. Esta decisión permitió mantener gráficos interactivos dentro de la página final, sin convertirlos en imágenes estáticas.

Las visualizaciones incluidas permiten mirar los votos nulos y blancos desde distintas escalas. Algunas muestran la evolución nacional entre 1989 y 2025; otras comparan primera y segunda vuelta; otras relacionan el fenómeno con cambios del sistema electoral o con la oferta presidencial y otras bajan el análisis al territorio mediante mapas de calor y gráficos regionales.
