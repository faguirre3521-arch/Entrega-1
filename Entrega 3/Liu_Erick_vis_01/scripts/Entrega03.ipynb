¡pip install altair pandas
from google.colab import files
import matplotlib.pyplot as plt

# ==========================================
# GRÁFICO 1: Cantidad de candidatos vs voto nulo por vuelta
# ==========================================

candidatos_por_vuelta = base.groupby(['anio', 'vuelta'])['Candidatos'].nunique().reset_index()

candidatos_por_vuelta = candidatos_por_vuelta.rename(columns={
    'Candidatos': 'cantidad_candidatos'
})

cantidad_vs_nulos_vueltas = pd.merge(
    candidatos_por_vuelta,
    votos_por_eleccion_limpio[['anio', 'vuelta', 'porcentaje_nulos']],
    on=['anio', 'vuelta'],
    how='inner'
)

plt.figure(figsize=(10,6))

for vuelta in cantidad_vs_nulos_vueltas['vuelta'].unique():
    datos = cantidad_vs_nulos_vueltas[cantidad_vs_nulos_vueltas['vuelta'] == vuelta]
    
    plt.scatter(
        datos['cantidad_candidatos'],
        datos['porcentaje_nulos'],
        label=f'Vuelta {vuelta}'
    )
    
    for i, row in datos.iterrows():
        plt.text(
            row['cantidad_candidatos'] + 0.05,
            row['porcentaje_nulos'],
            str(int(row['anio']))
        )

plt.title('Cantidad de candidatos y porcentaje de voto nulo por vuelta')
plt.xlabel('Cantidad de candidatos')
plt.ylabel('Votos nulos (%)')
plt.legend()
plt.grid(True)

plt.savefig('cantidad_candidatos_vs_voto_nulo_por_vuelta.png', dpi=300, bbox_inches='tight')
plt.show()

files.download('cantidad_candidatos_vs_voto_nulo_por_vuelta.png')


# ==========================================
# GRÁFICO 2: Voto nulo en primera vs segunda vuelta
# ==========================================

plt.figure(figsize=(12,6))

primera = cantidad_vs_nulos_vueltas[cantidad_vs_nulos_vueltas['vuelta'] == 1]
segunda = cantidad_vs_nulos_vueltas[cantidad_vs_nulos_vueltas['vuelta'] == 2]

plt.plot(
    primera['anio'],
    primera['porcentaje_nulos'],
    marker='o',
    label='Nulos primera vuelta (%)'
)

plt.plot(
    segunda['anio'],
    segunda['porcentaje_nulos'],
    marker='o',
    label='Nulos segunda vuelta (%)'
)

plt.title('Evolución del voto nulo en primera y segunda vuelta')
plt.xlabel('Año')
plt.ylabel('Votos nulos (%)')
plt.xticks(cantidad_vs_nulos_vueltas['anio'].unique(), rotation=45)
plt.legend()
plt.grid(True)

plt.savefig('voto_nulo_primera_vs_segunda_vuelta.png', dpi=300, bbox_inches='tight')
plt.show()

files.download('voto_nulo_primera_vs_segunda_vuelta.png')
