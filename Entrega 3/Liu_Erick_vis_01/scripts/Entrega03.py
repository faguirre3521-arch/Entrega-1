import pandas as pd
import altair as alt
from google.colab import files

# ============================
# CARGAR BASE
# ============================

base = pd.read_csv('/content/Base de Datos Elecciones y Candidatos.csv', sep=';')
base.columns = base.columns.str.strip()

base['anio'] = base['Año'].astype(int)

base['vuelta'] = base['Año'].apply(
    lambda x: 2 if round(x % 1, 1) == 0.1 else 1
)

# ============================
# CALCULAR VOTO NULO POR ELECCIÓN
# ============================

votos_por_eleccion = base.groupby(['Año', 'anio', 'vuelta'], as_index=False).agg({
    'Total': 'sum',
    'Blancos de la votación': 'max',
    'Nulos de la votación': 'max'
})

votos_por_eleccion = votos_por_eleccion.rename(columns={
    'Total': 'votos_validos',
    'Blancos de la votación': 'votos_blancos',
    'Nulos de la votación': 'votos_nulos'
})

votos_por_eleccion['votos_emitidos'] = (
    votos_por_eleccion['votos_validos'] +
    votos_por_eleccion['votos_blancos'] +
    votos_por_eleccion['votos_nulos']
)

votos_por_eleccion['porcentaje_nulos'] = (
    votos_por_eleccion['votos_nulos'] / votos_por_eleccion['votos_emitidos']
) * 100

votos_por_eleccion = votos_por_eleccion.dropna(subset=['porcentaje_nulos']).copy()

votos_por_eleccion['vuelta_texto'] = votos_por_eleccion['vuelta'].map({
    1: 'Primera vuelta',
    2: 'Segunda vuelta'
})

# ============================
# GRÁFICO 1: LÍNEA PRIMERA VS SEGUNDA VUELTA
# ============================

grafico_nulos_vueltas = alt.Chart(votos_por_eleccion).mark_line(point=True).encode(
    x=alt.X(
        'anio:O',
        title='Año'
    ),
    y=alt.Y(
        'porcentaje_nulos:Q',
        title='Votos nulos (%)'
    ),
    color=alt.Color(
        'vuelta_texto:N',
        title='Tipo de vuelta'
    ),
    tooltip=[
        alt.Tooltip('anio:O', title='Año'),
        alt.Tooltip('vuelta_texto:N', title='Vuelta'),
        alt.Tooltip('porcentaje_nulos:Q', title='Votos nulos (%)', format='.2f')
    ]
).properties(
    title='Evolución del voto nulo en primera y segunda vuelta',
    width=750,
    height=420
)

grafico_nulos_vueltas

grafico_nulos_vueltas.save('voto_nulo_primera_vs_segunda_vuelta.html')
grafico_nulos_vueltas.save('voto_nulo_primera_vs_segunda_vuelta.png')

files.download('voto_nulo_primera_vs_segunda_vuelta.html')
files.download('voto_nulo_primera_vs_segunda_vuelta.png')
# Crear tabla con primera y segunda vuelta

nulos_vueltas = votos_por_eleccion.pivot_table(
    index='anio',
    columns='vuelta',
    values='porcentaje_nulos',
    aggfunc='first'
).reset_index()

nulos_vueltas.columns.name = None

nulos_vueltas = nulos_vueltas.rename(columns={
    1: 'nulos_primera',
    2: 'nulos_segunda'
})

# Dejar solo elecciones que tienen primera y segunda vuelta
nulos_vueltas = nulos_vueltas.dropna(subset=['nulos_primera', 'nulos_segunda']).copy()

# Calcular diferencia
nulos_vueltas['diferencia'] = nulos_vueltas['nulos_segunda'] - nulos_vueltas['nulos_primera']

nulos_vueltas
grafico_diferencia = alt.Chart(nulos_vueltas).mark_line(point=True).encode(
    x=alt.X(
        'anio:O',
        title='Año'
    ),
    y=alt.Y(
        'diferencia:Q',
        title='Diferencia en voto nulo, segunda vuelta menos primera vuelta (%)'
    ),
    tooltip=[
        alt.Tooltip('anio:O', title='Año'),
        alt.Tooltip('nulos_primera:Q', title='Nulos primera vuelta (%)', format='.2f'),
        alt.Tooltip('nulos_segunda:Q', title='Nulos segunda vuelta (%)', format='.2f'),
        alt.Tooltip('diferencia:Q', title='Diferencia', format='.2f')
    ]
).properties(
    title='Cambio del voto nulo entre primera y segunda vuelta',
    width=750,
    height=420
)

grafico_diferencia
grafico_nulos_vueltas.save('voto_nulo_primera_vs_segunda_vuelta.html')
grafico_nulos_vueltas.save('voto_nulo_primera_vs_segunda_vuelta.png')

grafico_diferencia.save('cambio_voto_nulo_entre_vueltas.html')
grafico_diferencia.save('cambio_voto_nulo_entre_vueltas.png')

files.download('voto_nulo_primera_vs_segunda_vuelta.html')
files.download('voto_nulo_primera_vs_segunda_vuelta.png')

files.download('cambio_voto_nulo_entre_vueltas.html')
files.download('cambio_voto_nulo_entre_vueltas.png')
