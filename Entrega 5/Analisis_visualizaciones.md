# Análisis de visualizaciones

Las visualizaciones de ANÚLEMELO fueron desarrolladas a partir de bases de datos en formato CSV, trabajadas en Google Colab y programadas con apoyo de ChatGPT. El proceso combinó limpieza de datos, cálculo de porcentajes, generación de gráficos, exportación en HTML e integración posterior en la webstory final.

La base principal utilizada fue el CSV de resultados presidenciales por año, vuelta y región. En esa base se trabajó con variables como votos emitidos, votos válidos, votos nulos, votos blancos, año electoral, región y vuelta presidencial. A partir de esos datos se calculó el porcentaje de votos nulos y blancos sobre el total de votos emitidos, que funciona como el indicador central del proyecto.

También se utilizó una base complementaria de candidaturas presidenciales, donde se organizaron datos como candidatura, partido, coalición e ideología. Esa información permitió construir las visualizaciones relacionadas con la oferta presidencial y la polarización de las candidaturas. Esta parte fue usada como contexto político, no como una prueba causal directa sobre el comportamiento del voto nulo o blanco.

El trabajo técnico se realizó en Google Colab. Allí se cargaron los CSV, se limpiaron nombres de regiones, se ordenaron años y vueltas, se calcularon porcentajes y se generaron distintas versiones de gráficos. Los códigos utilizados para ese proceso fueron construidos con apoyo de ChatGPT, especialmente para resolver la estructura de los gráficos, corregir errores de programación, automatizar la exportación de archivos HTML y ajustar la forma en que las visualizaciones serían incorporadas al sitio.

No todos los gráficos fueron pensados desde el inicio en el mismo orden en que aparecen en la webstory final. Primero se produjeron varias visualizaciones exploratorias y luego se seleccionaron las que mejor ayudaban a contar la historia. Después, esas visualizaciones fueron ordenadas dentro del relato para que avanzaran desde una mirada general hacia una lectura más específica del fenómeno.

Los gráficos finales fueron exportados desde Colab en formato HTML. Luego se incorporaron a la carpeta `docs/graficos0/` y fueron integrados en la webstory mediante elementos `iframe`. Esta decisión permitió mantener gráficos interactivos dentro de la página final, sin convertirlos en imágenes estáticas.

Las visualizaciones incluidas permiten mirar los votos nulos y blancos desde distintas escalas. Algunas muestran la evolución nacional entre 1989 y 2025; otras comparan primera y segunda vuelta; otras relacionan el fenómeno con cambios del sistema electoral o con la oferta presidencial y otras bajan el análisis al territorio mediante mapas de calor y gráficos regionales.

La visualización de evolución nacional permite observar que los votos nulos y blancos no crecen de manera lineal durante todo el periodo. Hay momentos de estabilidad, caídas durante el voto voluntario y un cambio de escala cuando vuelve el voto obligatorio.

La visualización sobre sistema electoral ayuda a relacionar los cambios en las reglas de participación con el comportamiento de los votos nulos y blancos. Esto es importante porque el retorno del voto obligatorio cambia la cantidad de personas que participa y, por lo tanto, también cambia la forma en que se leen estos votos.

El gráfico de primera y segunda vuelta permite comparar ambas etapas de una elección presidencial. Su lectura principal es que la segunda vuelta no genera automáticamente más votos nulos o blancos. El aumento depende del contexto de cada balotaje, del tipo de candidaturas que pasan a segunda vuelta y de cómo se ordena la competencia electoral.

La visualización sobre oferta presidencial y polarización funciona como una lectura exploratoria. Permite observar el contexto político de las candidaturas y vincularlo con la discusión sobre distancia electoral, sin afirmar que la polarización sea la única causa del voto nulo o blanco.

El mapa de calor regional muestra que el promedio nacional puede esconder diferencias importantes entre regiones. Esta visualización ayuda a identificar dónde los votos nulos y blancos fueron más altos y en qué territorios el aumento de 2025 aparece con mayor intensidad, destacando en particular los resultados de las regiones en el norte.

Finalmente, los gráficos regionales permiten revisar cada región por separado. Esta parte busca evitar que todas las regiones sean leídas como si tuvieran el mismo comportamiento. Al observar cada trayectoria regional, se puede ver con más detalle dónde el voto nulo y blanco crece, se mantiene o cambia de escala.

En conjunto, las visualizaciones fueron construidas primero como exploraciones de datos y luego ordenadas dentro de una narración visual. El objetivo final fue que cada gráfico aportara una lectura distinta del fenómeno, sin presentar los votos nulos y blancos como una explicación única del resultado electoral.
