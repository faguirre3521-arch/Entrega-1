# Ficha Técnica
## Base de datos: Elecciones presidenciales y votos nulos/blancos en Chile (1989–2025)

---

## 1. Fuente de los datos

La base de datos fue construida a partir de fuentes electorales oficiales de Chile. Los datos de votación (votos totales, votos nulos y votos blancos) provienen del Servicio Electoral de Chile (SERVEL), organismo autónomo responsable de la administración, supervigilancia y fiscalización de los procesos electorales. Los datos sobre candidatos, partidos y coaliciones fueron complementados con registros históricos publicados por el propio SERVEL y por la Biblioteca del Congreso Nacional de Chile (BCN).

---

## 2. Metodología de construcción de la base

La base fue construida manualmente mediante recopilación y consolidación de registros electorales históricos. El proceso incluyó los siguientes pasos:

- Identificación de cada proceso electoral presidencial desde 1989 (primera elección tras el retorno a la democracia) hasta 2025.
- Registro del o los candidatos finalistas en cada elección, junto con su partido y coalición de pertenencia.
- Incorporación del régimen de votación vigente en cada proceso, clasificado según las normas legales aplicables.
- Registro de los datos de participación: votos totales emitidos, votos nulos y votos blancos, tal como fueron comunicados por el SERVEL.
- Cálculo de variables derivadas: suma de votos nulos y blancos, y su porcentaje sobre el total de votos emitidos.

La base no distingue entre primera y segunda vuelta de forma sistemática: los registros de 1989 y 1993 corresponden a elecciones resueltas en primera vuelta, y desde 2005 en adelante todos los registros están explícitamente etiquetados como "Segunda vuelta".

---

## 3. Alcance de los datos

Los datos cubren desde la elección presidencial de 1989 hasta la elección de 2025, abarcando 9 procesos electorales a nivel nacional.

Cada fila representa un proceso electoral completo (no desagregado por región, circunscripción ni mesa). El archivo incluye únicamente los dos candidatos que disputaron la última vuelta (en el caso de 1999 al 2025), o los dos candidatos con mayor votación (en el caso de 1989 y 1993).

---

## 4. Características de los datos

La base de datos corresponde a un conjunto de datos estructurados organizados, donde cada fila representa una elección presidencial específica (ya sea una elección directa o una segunda vuelta), y cada columna corresponde a una variable definida. La información se encuentra agregada a nivel nacional, por lo que no incluye desagregaciones territoriales como regiones o comunas.

La base combina variables categóricas y numéricas. Las variables categóricas incluyen nombres de candidatos, partidos políticos, coaliciones y el régimen de votación, mientras que las variables numéricas corresponden a conteos absolutos de votos (totales, nulos y blancos) y a indicadores derivados expresados en términos porcentuales.

Los datos no son estrictamente regulares, ya que dependen del calendario electoral presidencial, de la existencia de segundas vueltas en ciertos años, y de cambios institucionales a lo largo del período —como el paso de voto obligatorio a voluntario y su posterior modificación—, lo que puede influir en los niveles de participación y en la proporción de votos nulos y blancos.

---

## 5. Diccionario de datos

| Variable | Descripción | Tipo de dato | Valores posibles | Observaciones |
|---|---|---|---|---|
| Año | Año de la elección o referencia a segunda vuelta | Numérico / Texto | 1989, 1993, 1999, etc. | Puede incluir texto como "Segunda vuelta 2005" |
| Elecciones | Tipo de elección | Texto | Primera vuelta, Segunda vuelta | En algunos casos implícito |
| candidato 1 | Nombre del candidato principal | Texto | Nombres propios | El orden no necesariamente indica ganador |
| Partido candidato 1 | Partido político del candidato 1 | Texto | PDC, PS, RN, etc. | Puede incluir múltiples partidos |
| Coalición candidato 1 | Coalición política del candidato 1 | Texto | Concertación, Chile Vamos, etc. | Variable categórica abierta |
| candidato 2 | Nombre del segundo candidato | Texto | Nombres propios | Rival principal |
| Partido candidato 2 | Partido político del candidato 2 | Texto | UDI, RN, PC, etc. | Puede ser "Independiente" |
| Coalición candidato 2 | Coalición del candidato 2 | Texto | Alianza, Nueva Mayoría, etc. | — |
| Régimen del voto | Tipo de sistema electoral vigente | Texto | Obligatorio, Voluntario | Puede incluir descripciones mixtas |
| Votos totales | Total de votos emitidos | Numérico (entero) | > 0 | Incluye válidos, nulos y blancos |
| votos nulos | Total de votos nulos | Numérico (entero) | ≥ 0 | — |
| votos blancos | Total de votos en blanco | Numérico (entero) | ≥ 0 | — |
| Suma votos nulos y blancos | Suma de votos nulos y blancos | Numérico (entero) | ≥ 0 | Variable derivada |
| % votos nulos y blancos | Proporción respecto del total | Numérico (porcentaje) | 0–100% | Variable derivada |
