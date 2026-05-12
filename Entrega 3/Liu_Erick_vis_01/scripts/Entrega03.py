import pandas as pd
import altair as alt

# ============================
# CARGAR BASE
# ============================

base = pd.read_csv('Base de Datos Elecciones y Candidatos.csv', sep=';')
base.columns = base.columns.str.strip()

# Crear año limpio
base['anio'] = base['Año'].astype(int)

# Crear variable para distinguir primera y segunda vuelta
base['vuelta'] = base['Año'].apply(
    lambda x: 2 if round(x % 1, 1) == 0.1 else 1
)

# ============================
# PROCESAR DATOS
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

# Calcular total de votos emitidos
votos_por_eleccion['votos_emitidos'] = (
    votos_por_eleccion['votos_validos'] +
    votos_por_eleccion['votos_blancos'] +
    votos_por_eleccion['votos_nulos']
)

# Calcular porcentaje de blancos + nulos
votos_por_eleccion['porcentaje_blancos_nulos'] = (
    (votos_por_eleccion['votos_blancos'] + votos_por_eleccion['votos_nulos']) /
    votos_por_eleccion['votos_emitidos']
) * 100

# Eliminar filas sin datos necesarios
votos_por_eleccion = votos_por_eleccion.dropna(
    subset=['porcentaje_blancos_nulos']
).copy()

# Crear etiqueta de vuelta
votos_por_eleccion['vuelta_texto'] = votos_por_eleccion['vuelta'].map({
    1: 'Primera vuelta',
    2: 'Segunda vuelta'
})

# ============================
# CREAR VISUALIZACIÓN
# ============================

grafico = alt.Chart(votos_por_eleccion).mark_line(point=True).encode(
    x=alt.X(
        'anio:O',
        title='Año'
    ),
    y=alt.Y(
        'porcentaje_blancos_nulos:Q',
        title='Votos blancos y nulos (%)'
    ),
    color=alt.Color(
        'vuelta_texto:N',
        title='Vuelta'
    ),
    tooltip=[
        alt.Tooltip('anio:O', title='Año'),
        alt.Tooltip('vuelta_texto:N', title='Vuelta'),
        alt.Tooltip('porcentaje_blancos_nulos:Q', title='Blancos + nulos (%)', format='.2f'),
        alt.Tooltip('votos_blancos:Q', title='Votos blancos'),
        alt.Tooltip('votos_nulos:Q', title='Votos nulos'),
        alt.Tooltip('votos_emitidos:Q', title='Votos emitidos')
    ]
).properties(
    title='Evolución de votos blancos y nulos en primera y segunda vuelta',
    width=750,
    height=420
)

# ============================
# GUARDAR ARCHIVOS
# ============================

grafico.save('voto_nulo_primera_vs_segunda_vuelta.html')
grafico.save('voto_nulo_primera_vs_segunda_vuelta.png')

print("Visualización guardada correctamente.")
