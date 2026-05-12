# Ficha técnica
Las bases fueron construidas a partir de datos electorales oficiales, principalmente de TRICEL, recogidas del SERVEL. También se usaron bases complementarias creadas para el proyecto sobre características de candidaturas y polarización (polarización no sé incluye en estos gráficos).

## Bases utilizadas (csv)
- `Base de Datos Elecciones y Candidatos.csv`
- `Caracterisitcas de Candidatos ID.csv`
- `resumen_polarizacion_chile.csv`
(Todos los resultados de las elecciones presidenciales entre 1989 y 2025)
## Variables principales

| Variable | Descripción |
|---|---|
| `Candidatos` | Nombre del candidato. |
| `Año` | Año de la elección. |
| `Total` | Votos del candidato. |
| `Blancos de la votación` | Votos blancos. |
| `Nulos de la votación` | Votos nulos. |
| `vuelta` | Primera o segunda vuelta. |
| `porcentaje_nulos` | Porcentaje de votos nulos sobre votos emitidos. |
| `Partido` | Partido del candidato. |
| `Coalicion` | Coalición o pacto del candidato. |
| `Ideologia` | Clasificación ideológica del candidato. |
| `score_final` | Indicador de polarización usado como apoyo. |

## Observaciones

Los votos nulos y blancos aparecen por ahora como datos nacionales, no regionales (y en general como nulos). Pronto se ampliará y se precisará.
La base permite observar tendencias históricas, pero no demuestra con estos gráficos aún una causa directa. El aumento del voto nulo puede estar relacionado en distinta media con diversos factores, como voto obligatorio, polarización o falta de identificación con las candidaturas disponibles.
