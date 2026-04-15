### Documentación Entrega 2


# Lo primero que hice para esta limpieza de datos fue abrir excel, e intentar seguir los pasos que se detallaron en la ayudantía. Al ver que la página de la Biblioteca del Congreso Nacional permitía descargar los datos en archivos CSV, no dudé en descargarlos. 

# Pero ocurrío que la página desplegaba los datos individualmente, es decir que uno selecciona tipo de elección, año y rango de análisis (nacional, región, comuna, etc) el tema es que no podía desplegar varias regiones a la vez. Este problema hubiera causado que tuviera que armar mi base de datos con aproximadamente más de 100 archivos CSV abiertos, cosa que no estimé óptima. Seguro había una manera efectiva de enfrentar esta barrera pero opté por mover los datos al excel de manera manual.

# Como se menciona en la ficha técnica, decidí desplegar los datos de la siguente manera. Elecciones presidenciales, la primera columna es el año de la elección, luego van las regiones, cada región ocupa dos columnas porque la una esta destinada a desplegar el número total de votos escrutados y la otra simplemente los nulos y Blancos. No se ve en el CSV del repositorio pero en excel opté por intercalar colores según columna para facilitar la comprensión. Las útlimas dos columnas siguen la lógica de votos totales vs votos escrutados solo que a nivel nacional.

# Las fuentes consultadas fueron, la ya mencionada página de la Biblioteca del Congreso Nacional destinada a las elecciones históricas, y los resultados de las elecciones del año pasado desplegadas en la página web de Radio Biobío,acudí a esta página ya que la BCN no se encontraba actualizada a ese momento.

# Dentro de las preguntas que se pueden responder con la base de datos construida se podrían encontrar:

# ¿El voto obligatorio logró visibilizar la baja participación que hasta ese entonces hubó?
# ¿Qué regiones son las que proporcionalmente anulan más y menos frecuentemente?
# ¿Cómo ha evolucionado la anulación de votos desde la vuelta a la democracia?¿Ha sido algo sostenido en el tiempo?