# Documentación de la base de datos
## Elecciones presidenciales y votos nulos/blancos en Chile (1989–2025)

---

## Proceso de limpieza y construcción de las bases

La base fue construida desde cero a partir de registros electorales históricos públicos, no a partir de una base preexistente descargada en bruto. Esto significa que el proceso de "limpieza" aquí no consistió en corregir errores de un dataset externo, sino en tomar decisiones de diseño y construcción que determinan qué datos entran, en qué forma y con qué estructura. Cada una de esas decisiones se documenta a continuación.

### Definición del universo temporal

En una primera instancia definí el espacio temporal de los registros, y decidí incluir todas las elecciones presidenciales desde 1989 hasta 2025, es decir, desde el primer proceso electoral tras el retorno a la democracia en Chile hasta la elección más reciente. Hice la revisión de los datos desde fuentes oficiales (SERVEL y BCN).

Empecé por el año 1989 porque es el punto de quiebre institucional: es la primera elección libre y competitiva luego de la dictadura. Incluir ese punto de partida permite observar el fenómeno del voto nulo y blanco en toda la trayectoria democrática reciente, incluyendo los cambios en el régimen de votación.

### Criterio de selección de vuelta

En elecciones con segunda vuelta, se registró únicamente ese resultado final, ya que es el proceso más relevante políticamente (define al presidente) y el que permite la comparación más limpia entre dos candidatos. Los procesos de 1989 y 1993 se resolvieron en primera vuelta, por lo que se registraron directamente.

### Selección de candidatos

Se registraron únicamente los dos candidatos con mayor votación en la vuelta definitiva de cada elección, descartando a los candidatos que quedaron fuera en primera vuelta en los procesos con ballotage. Incluir a todos los candidatos que se presentaron en primera vuelta habría complejizado innecesariamente la estructura de la base sin aportar valor directo al análisis central, que es la relación entre polarización electoral y voto nulo/blanco. Los dos finalistas son suficientes para medir el nivel de confrontación entre bloques y para construir el espectro ideológico.

### Separación entre partido y coalición

Otra decisión importante fue la de crear columnas separadas para el partido político del candidato y para su coalición electoral.

Varios de los candidatos registrados se presentaron formalmente como independientes (por ejemplo, Hernán Büchi en 1989, Sebastián Piñera en 2017 y José Antonio Kast en 2017), pero respaldados por coaliciones con una identidad política clara. Si se usara solo la columna de partido, estos candidatos quedarían sin posicionamiento ideológico útil, lo que haría imposible construir el espectro político. La coalición entrega ese contexto estructural aunque el candidato no milite en ningún partido.

Esta separación también es útil para análisis históricos: el nombre de las coaliciones ha cambiado a lo largo del tiempo (la Concertación pasó a llamarse Nueva Mayoría, y luego Unidad por Chile), lo que permite rastrear continuidades incluso cuando cambia el membrete.

La diferenciación de estas variables será útil en nuestro trabajo, especialmente cuando tengamos que definir algunas elecciones como "polarizadas", porque necesitaremos crear un espectro político que logre ordenar a los candidatos desde extrema izquierda a extrema derecha.

### Variable de régimen del voto

La variable de régimen del voto fue una decisión de último minuto, con el objetivo de describir el sistema de votación vigente en cada elección. Se clasificó en tres categorías:

- **Inscripción voluntaria, voto obligatorio (1989–2009):** los ciudadanos debían inscribirse voluntariamente en los registros electorales, pero una vez inscritos, el voto era obligatorio.
- **Voluntario (2013–2021):** tanto la inscripción como el voto eran voluntarios, tras la reforma introducida por la Ley 20.568 de 2012.
- **Obligatoriedad universal con inscripción automática (2025):** todos los mayores de 18 años quedan inscritos automáticamente y el voto es obligatorio, conforme a la Ley 21.533 de 2023.

Este es uno de los factores de control más importantes de la base. El voto nulo y blanco en 2025 alcanzó un 7,06% del total de votos emitidos, una cifra extraordinariamente alta en comparación con los años anteriores. Parte de ese fenómeno se explica directamente por el cambio de régimen: la obligatoriedad universal incorporó al padrón a millones de electores que anteriormente no participaban, muchos de los cuales podrían no tener preferencia o no estar familiarizados con el proceso. Sin esta variable, cualquier análisis comparativo de la serie temporal quedaría incompleto.

---

## Fuentes de datos

| Fuente | Tipo | Por qué se eligió |
|---|---|---|
| **Servicio Electoral de Chile (SERVEL)** | Oficial / primaria | Es el organismo autónomo legalmente responsable de los procesos electorales en Chile. Sus resultados son los datos oficiales y definitivos de cada elección. |
| **Biblioteca del Congreso Nacional de Chile (BCN)** | Oficial / secundaria | Ofrece registros históricos sistematizados sobre candidatos, partidos y coaliciones electorales, complementando los datos de votación del SERVEL con información institucional. |
| **Legislación oficial chilena (Diario Oficial / BCN)** | Normativa | Para documentar con precisión los cambios en el régimen de votación (Ley 20.568 de 2012 y Ley 21.533 de 2023) que afectan directamente la interpretación de los datos. |

Se priorizaron fuentes oficiales por sobre fuentes secundarias (medios de comunicación, Wikipedia, etc.) para garantizar la precisión de los datos y la transparencia del proceso. En todos los casos donde hubo diferencias entre fuentes, se privilegió la información del SERVEL como autoridad electoral definitiva.

---

## Preguntas que se pueden responder con esta base de datos

### Pregunta 1: ¿Ha aumentado el voto nulo y blanco con el tiempo?

La base permite trazar la evolución del porcentaje de votos nulos y blancos en cada elección desde 1989 hasta 2025. Un análisis de tendencia simple muestra que el porcentaje se mantuvo relativamente estable entre 1989 y 2021 (oscilando entre 1% y 3,9%), con una caída notable en 2017 y 2021 (bajo el régimen de voto voluntario), y un salto excepcional en 2025 (7,06%) tras la reintroducción del voto obligatorio. Esto permite responder no solo si hubo aumento, sino también qué factores institucionales podrían explicarlo.

### Pregunta 2: ¿El régimen de votación influye en el nivel de voto nulo y blanco?

Agrupando los registros por tipo de régimen de votación, es posible calcular el promedio del porcentaje de votos nulos y blancos para cada categoría:

- **Inscripción voluntaria, voto obligatorio (1989–2009):** promedio aprox. 2,9%
- **Voto voluntario (2013–2021):** promedio aprox. 1,4%
- **Obligatoriedad universal (2025):** 7,06%

Esto sugiere que el voto obligatorio, especialmente cuando incorpora a electores no habituales (como ocurrió en 2025 con la inscripción automática), está asociado a niveles más altos de voto nulo y blanco. Un análisis más completo requeriría controlar por otros factores, pero la base provee la evidencia empírica para plantear la hipótesis.

### Pregunta 3: ¿Las elecciones más polarizadas tienen más votos nulos y blancos?

Esta es la pregunta central que motivó el diseño de la base y requiere un paso adicional: construir un índice de polarización ideológica para cada elección, posicionando a los candidatos en un espectro de izquierda a derecha según su partido y coalición. Una vez asignados esos valores, sería posible calcular la distancia ideológica entre los dos candidatos de cada elección y correlacionarla con el porcentaje de voto nulo y blanco.

La base actual ya contiene los datos de partidos y coaliciones necesarios para ese ejercicio. Las elecciones de 2021 (Boric/Apruebo Dignidad vs. Kast/Frente Social Cristiano) y 2025 (Kast/Cambio por Chile vs. Jara/Unidad por Chile) son candidatas a ser las más polarizadas de la serie, y también presentan el mayor porcentaje de votos nulos y blancos después de 1993. La pregunta es metodológicamente exigente, pero la base fue diseñada específicamente para habilitarla.
