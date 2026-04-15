# Documentación del proceso de limpieza

## 1. Explicación del proceso de limpieza de datos

Esta base de datos fue construida para analizar la distribución del electorado por sexo y región en elecciones presidenciales chilenas. El objetivo fue producir un archivo limpio, claro y comparable, que pudiera servir como insumo para análisis y visualización dentro del proyecto sobre votos nulos y blancos. En esta etapa, la base no busca explicar por sí sola el comportamiento electoral, sino aportar una capa demográfica complementaria que permita observar quiénes componen el electorado en distintos territorios y cómo esa composición puede dialogar con otras bases del proyecto.

Para analizar el fenómeno desde distintas perspectivas, se decidí comenzar con un período acotado correspondiente a las elecciones presidenciales entre 1989 y 1999. Esta delimitación permite construir una base inicial más manejable, ordenada y comparable, concentrada en una primera etapa del período postdictatorial previa a transformaciones institucionales y electorales posteriores. De esta manera, el recorte temporal responde tanto a una decisión práctica de trabajo con datos como a un criterio analítico, ya que permite observar el comportamiento del electorado en un ciclo relativamente más homogéneo. Esta base constituye una primera fase del proyecto, y posteriormente el análisis se continuará con los demás años presidenciales para ampliar la comparación y completar la serie histórica hasta 2025.

El primer paso del trabajo fue definir con claridad cuál sería la unidad de análisis. En este caso, cada fila representa una combinación específica de **año, región y sexo**, junto con la cantidad de votantes registrada, su porcentaje dentro del total regional, el total de referencia y la fuente del dato.

Luego se revisó el archivo original para identificar posibles problemas de formato. Uno de los primeros hallazgos fue que el archivo estaba separado por **punto y coma (;)** y no por comas, lo que podía provocar errores al abrirlo en algunos programas o al leerlo directamente con Python. Por eso, una de las primeras decisiones metodológicas fue asegurar la correcta lectura del separador del archivo antes de iniciar la limpieza.

Una vez corregidos los tipos de dato y revisados los nombres de las categorías, se comprobó si existían duplicados o valores faltantes. También se revisó la consistencia general de la base para asegurar que cada fila correspondiera efectivamente a una combinación válida de año, región y sexo. El resultado fue una base de datos limpia, legible y lista para ser utilizada como insumo complementario en el análisis general del proyecto.

## 2. Decisiones tomadas durante el proceso

Durante la limpieza y organización de la base se tomaron varias decisiones metodológicas y editoriales para asegurar su claridad y utilidad:

- Se acotó el período inicial de trabajo a las elecciones presidenciales entre **1989 y 1999**, con el fin de construir una primera fase del análisis más manejable y homogénea.
- Se trabajó exclusivamente con datos **agregados por región**, descartando niveles más desagregados como comuna o mesa, ya que no eran necesarios para esta etapa del proyecto.
- Se mantuvo la estructura histórica de las regiones vigentes en cada elección, en lugar de homologar artificialmente todos los años a la división regional actual.
- Se definió que cada fila representara una única combinación de **año, región y sexo**.
- Se estandarizaron los tipos de dato en columnas numéricas para facilitar análisis posteriores.
- Se conservaron nombres claros y consistentes para todas las variables.

Estas decisiones permitieron producir una base más clara, más fácil de interpretar y más compatible con las otras capas del proyecto grupal.

## 3. Herramientas utilizadas
Para construir y limpiar la base se utilizaron las siguientes herramientas:
- **VS Code**, como entorno principal de trabajo.
- **Python**, para la lectura, limpieza y exportación del archivo.
- **Pandas**, para manipular la tabla, corregir tipos de dato y exportar el CSV limpio.
- **Archivo CSV original**, como fuente base del trabajo individual.

## 4. Fuentes utilizadas y justificación

La base se construyó a partir de información electoral oficial vinculada al **Servicio Electoral de Chile (SERVEL)**. Sin embargo, para el período trabajado en esta etapa, correspondiente a **1989–1999**, los datos fueron rescatados desde registros históricos publicados por el **Ministerio del Interior**, que reúnen información oficial de esos procesos electorales. 

## 5. Preguntas que se pueden responder con esta base

A partir de esta base de datos limpia, se pueden responder al menos las siguientes preguntas:

1. **¿Cómo se distribuye el electorado por sexo en las distintas regiones en elecciones presidenciales entre 1989 y 1999?**

2. **¿Qué regiones presentan mayores diferencias porcentuales entre hombres y mujeres dentro del electorado?**

3. **¿Cómo cambia la composición por sexo entre una elección presidencial y otra dentro del período analizado?**

Estas preguntas muestran que la base no solo organiza datos, sino que también permite abrir líneas de análisis útiles para complementar la historia general del proyecto.

## 6. Relación de la base con el proyecto general

Dentro del proyecto grupal, esta base cumple una función complementaria. Mientras otras bases se enfocan en los resultados electorales, en los votos nulos y blancos o en la oferta política de cada elección, esta base aporta una mirada sobre la composición del electorado por sexo y región. Esa información puede ser útil para identificar contextos demográficos que acompañen o ayuden a interpretar ciertos comportamientos electorales, especialmente al comparar regiones o períodos.

Por lo tanto, esta base no está pensada como una historia cerrada en sí misma, sino como un insumo que fortalece el análisis desde otra perspectiva. Su utilidad está en ampliar la lectura del fenómeno y aportar una dimensión adicional al trabajo comparativo del grupo. Y posteriormete se sumaran variables similares como el rango etario o la presencia de eventos fuera de lo cumún.

## 7. Observaciones finales

La principal dificultad de esta base estuvo en la limpieza técnica del archivo, especialmente en el tratamiento del separador, el formato de columnas numéricas y la estandarización de porcentajes. Sin embargo, una vez resueltos esos problemas, la estructura general del archivo resultó clara y útil para el objetivo del proyecto.

Esta primera versión de la base se limita al período 1989–1999 por razones metodológicas y prácticas. En etapas posteriores del trabajo, se espera continuar con los demás años presidenciales para ampliar la serie histórica y completar el análisis hasta 2025. De ese modo, esta base funciona como una primera fase de construcción de un insumo más amplio, comparable y útil para la etapa final de visualización y narrativa del proyecto.