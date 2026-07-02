const regiones = [
  {
    nombre: "Arica y Parinacota",
    zona: "Norte",
    archivo: "graficos0/region_arica_y_parinacota.html",
    textoA: "En Arica y Parinacota, la serie disponible comienza en 2009, porque la región no existía como unidad separada durante todo el periodo histórico. Desde entonces, el voto nulo y blanco se mantuvo bajo en las elecciones de voto voluntario, especialmente en segundas vueltas como 2017 y 2021.",
    textoB: "El cambio más visible aparece en 2025. En la segunda vuelta, los votos nulos y blancos llegan a cerca de 8,5% de los votos emitidos, el punto más alto de la serie regional. Esto sugiere que, bajo voto obligatorio y con una oferta concentrada en polos opuestos, la región muestra una señal más intensa de distancia electoral que en ciclos anteriores."
  },
  {
    nombre: "Tarapacá",
    zona: "Norte",
    archivo: "graficos0/region_tarapaca.html",
    textoA: "Tarapacá muestra una trayectoria marcada por bajos porcentajes de votos nulos y blancos durante gran parte del periodo. En especial, las elecciones de voto voluntario mantienen niveles reducidos, con mínimos cercanos al 1% en segunda vuelta.",
    textoB: "En 2025 se produce el salto más visible: la segunda vuelta alcanza cerca de 8,2%. No se trata de una tendencia sostenida durante toda la serie, sino de un aumento concentrado en el nuevo contexto de voto obligatorio y competencia entre polos opuestos."
  },
  {
    nombre: "Antofagasta",
    zona: "Norte",
    archivo: "graficos0/region_antofagasta.html",
    textoA: "Antofagasta es una de las regiones donde el aumento de 2025 aparece con mayor intensidad. Durante buena parte de la serie histórica, los votos nulos y blancos se mantienen en niveles acotados, especialmente en las elecciones realizadas bajo voto voluntario.",
    textoB: "La segunda vuelta de 2025 alcanza cerca de 10,5%, el valor más alto de la región en toda la serie. Este dato convierte a Antofagasta en un caso relevante dentro del mapa territorial: no muestra una crisis permanente del voto nulo, pero sí una señal fuerte en el momento en que coinciden voto obligatorio, segunda vuelta y una oferta presidencial más polarizada."
  },
  {
    nombre: "Atacama",
    zona: "Norte",
    archivo: "graficos0/region_atacama.html",
    textoA: "En Atacama, la evolución histórica muestra una serie relativamente contenida hasta 2025. Los porcentajes más bajos aparecen durante el periodo de voto voluntario, con niveles cercanos al 1% en algunas segundas vueltas.",
    textoB: "El cambio principal ocurre en la segunda vuelta de 2025, cuando los votos nulos y blancos llegan a cerca de 9,5%. La región se ubica entre las zonas donde el aumento reciente es más notorio. Esto refuerza la idea de que el fenómeno no se distribuye de manera pareja en el país y que el norte muestra una intensidad particular en 2025."
  },
  {
    nombre: "Coquimbo",
    zona: "Norte",
    archivo: "graficos0/region_coquimbo.html",
    textoA: "Coquimbo mantiene durante gran parte de la serie un comportamiento moderado, sin un crecimiento sostenido del voto nulo y blanco. Los porcentajes se mantienen bajos en el periodo de voto voluntario y no muestran por sí solos una señal de crisis electoral.",
    textoB: "En 2025, sin embargo, la segunda vuelta llega a cerca de 8,8%, el máximo regional de la serie. El dato funciona como una señal de contexto: el aumento aparece cuando se combinan obligatoriedad, balotaje y una oferta concentrada en polos opuestos."
  },
  {
    nombre: "Valparaíso",
    zona: "Centro",
    archivo: "graficos0/region_valparaiso.html",
    textoA: "Valparaíso, por su peso electoral y diversidad territorial, permite observar una región relevante fuera de la capital. La serie muestra que el voto nulo y blanco se mantuvo relativamente bajo durante los años de voto voluntario, con mínimos cercanos al 1%.",
    textoB: "En 2025, la segunda vuelta alcanza cerca de 7,7%, el valor más alto de la serie regional. Aunque el aumento es menor que en algunas regiones del norte, sigue mostrando un cambio claro respecto de 2021. La región confirma una tendencia general del año 2025: el voto nulo y blanco crece, pero no de manera homogénea en todo el país."
  },
  {
    nombre: "Región Metropolitana",
    zona: "Centro",
    archivo: "graficos0/region_metropolitana.html",
    textoA: "La Región Metropolitana concentra una parte importante del electorado nacional, por lo que su comportamiento ayuda a leer la tendencia general del país. En la serie, los votos nulos y blancos se mantienen acotados durante el periodo de voto voluntario, con niveles cercanos al 1% en 2021.",
    textoB: "En 2025, la segunda vuelta sube a cerca de 6,3%. Es un aumento relevante, pero más moderado que el observado en varias regiones del norte. Esto permite matizar la lectura: el voto nulo y blanco crece en el principal centro electoral del país, pero no alcanza allí las intensidades más altas del mapa territorial."
  },
  {
    nombre: "O’Higgins",
    zona: "Centro",
    archivo: "graficos0/region_ohiggins.html",
    textoA: "O’Higgins presenta una trayectoria similar a la de otras regiones de la zona central: niveles bajos durante el periodo de voto voluntario y un aumento claro en 2025. En 2021, la segunda vuelta se mantiene bajo el 1%, mientras que en 2025 cambia de escala.",
    textoB: "La segunda vuelta de 2025 llega a cerca de 7,4%, el máximo regional de la serie. La región muestra que el aumento del voto nulo y blanco no se limita al norte, aunque allí sea más intenso. En O’Higgins, el fenómeno aparece como una señal de 2025 más que como una tendencia ascendente permanente."
  },
  {
    nombre: "Maule",
    zona: "Centro",
    archivo: "graficos0/region_maule.html",
    textoA: "En Maule, el voto nulo y blanco se mantiene bajo durante buena parte de la serie histórica. Las elecciones de voto voluntario muestran porcentajes reducidos, especialmente en segunda vuelta, donde 2021 se mantiene cerca del 1%.",
    textoB: "En 2025, la segunda vuelta sube a cerca de 6,7%. El aumento existe, pero es más moderado que en regiones como Antofagasta, Atacama o Coquimbo. Maule ayuda a mostrar que el voto que no elige crece en 2025, pero con distintas intensidades territoriales."
  },
  {
    nombre: "Ñuble",
    zona: "Centro-sur",
    archivo: "graficos0/region_nuble.html",
    textoA: "Ñuble requiere una lectura metodológica especial, porque no aparece como región separada durante todo el periodo histórico. En esta base, su serie regional propia comienza en 2021, por lo que no permite una comparación larga como la de otras regiones.",
    textoB: "Aun así, el contraste reciente es claro. En 2021, la segunda vuelta se mantiene cerca del 1%, mientras que en 2025 llega a cerca de 6,2%. El dato muestra un aumento importante bajo el nuevo contexto de voto obligatorio, aunque debe interpretarse como una trayectoria reciente y no como una serie histórica completa."
  },
  {
    nombre: "Biobío",
    zona: "Centro-sur",
    archivo: "graficos0/region_biobio.html",
    textoA: "Biobío permite observar el comportamiento del voto nulo y blanco en una región de alto peso electoral del sur. Durante el periodo de voto voluntario, los porcentajes se mantienen bajos, especialmente en las segundas vueltas de 2017 y 2021.",
    textoB: "En 2025, la segunda vuelta alcanza cerca de 7,6%, el máximo regional de la serie. La región muestra un aumento relevante, más alto que el de otras zonas del centro-sur. Esto permite leer a Biobío como un territorio donde la señal de 2025 aparece con fuerza, aunque no como una tendencia sostenida desde elecciones anteriores."
  },
  {
    nombre: "La Araucanía",
    zona: "Sur",
    archivo: "graficos0/region_la_araucania.html",
    textoA: "La Araucanía muestra una trayectoria relativamente contenida durante la mayor parte de la serie. Los porcentajes de votos nulos y blancos se mantienen bajos en las elecciones de voto voluntario, especialmente en las segundas vueltas recientes.",
    textoB: "En 2025, la segunda vuelta llega a cerca de 6,3%. El aumento existe, pero se mantiene por debajo de varias regiones del norte y de Biobío. La región permite matizar la lectura territorial: el voto nulo y blanco crece bajo el nuevo escenario electoral, pero no con la misma intensidad en todos los territorios."
  },
  {
    nombre: "Los Ríos",
    zona: "Sur",
    archivo: "graficos0/region_los_rios.html",
    textoA: "Los Ríos, al igual que Arica y Parinacota, no aparece como región separada durante todo el periodo histórico. Su serie propia comienza en 2009, por lo que la comparación debe hacerse con esa limitación.",
    textoB: "Dentro de esa serie, el punto más alto aparece en la segunda vuelta de 2025, con cerca de 6,5%. La región muestra un aumento claro respecto de 2021, pero no alcanza los niveles más altos del país. Su trayectoria refuerza la idea de un crecimiento reciente, asociado al contexto electoral de 2025 más que a un despegue sostenido."
  },
  {
    nombre: "Los Lagos",
    zona: "Sur",
    archivo: "graficos0/region_los_lagos.html",
    textoA: "Los Lagos muestra una serie histórica donde los votos nulos y blancos se mantienen acotados durante los años de voto voluntario. En 2021, la segunda vuelta se ubica cerca del 1%, lo que contrasta con el aumento posterior.",
    textoB: "En 2025, la segunda vuelta llega a cerca de 7,3%, el máximo regional de la serie. El dato muestra que el sur también registra una señal relevante, aunque con menor intensidad que algunas regiones del norte. Los Lagos ayuda a observar que el fenómeno de 2025 es nacional, pero no uniforme."
  },
  {
    nombre: "Aysén",
    zona: "Austral",
    archivo: "graficos0/region_aysen.html",
    textoA: "Aysén presenta una trayectoria marcada por su menor escala electoral y por su particularidad territorial. Durante la mayor parte de la serie, los votos nulos y blancos se mantienen bajos, especialmente en el periodo de voto voluntario.",
    textoB: "En 2025, la segunda vuelta sube a cerca de 6,6%. El aumento es claro respecto de 2021, aunque no se ubica entre los valores más altos del país. En este caso, el gráfico permite leer una señal moderada: el voto que no elige crece con el nuevo contexto electoral, pero sin alcanzar las intensidades del norte."
  },
  {
    nombre: "Magallanes",
    zona: "Austral",
    archivo: "graficos0/region_magallanes.html",
    textoA: "Magallanes muestra el comportamiento del voto nulo y blanco en el extremo sur del país. Durante el periodo de voto voluntario, los porcentajes se mantienen bajos, con niveles cercanos al 1% en segundas vueltas recientes.",
    textoB: "En 2025, la segunda vuelta alcanza cerca de 7,9%, el máximo regional de la serie. El aumento es relevante y ubica a Magallanes por sobre varias regiones del centro y sur. Esto muestra que la intensidad territorial de 2025 no se concentra únicamente en el norte: también aparece con fuerza en el extremo austral."
  }
];

const regionList = document.getElementById("regionList");
const regionSearch = document.getElementById("regionSearch");
const filterButtons = document.querySelectorAll(".filter-btn");

const regionTitle = document.getElementById("regionTitle");
const regionTextA = document.getElementById("regionTextA");
const regionTextB = document.getElementById("regionTextB");
const regionFrame = document.getElementById("regionFrame");
const regionCaption = document.getElementById("regionCaption");

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

let activeZone = "Todas";
let activeRegion = "Antofagasta";

function renderRegions() {
  const query = regionSearch.value.trim().toLowerCase();

  const filtered = regiones.filter((region) => {
    const matchesZone = activeZone === "Todas" || region.zona === activeZone;
    const matchesQuery = region.nombre.toLowerCase().includes(query);
    return matchesZone && matchesQuery;
  });

  regionList.innerHTML = "";

  filtered.forEach((region) => {
    const button = document.createElement("button");
    button.className = "region-btn";

    if (region.nombre === activeRegion) {
      button.classList.add("active");
    }

    button.textContent = region.nombre;

    button.addEventListener("click", () => {
      setRegion(region.nombre);
    });

    regionList.appendChild(button);
  });
}

function setRegion(nombre) {
  const region = regiones.find((item) => item.nombre === nombre);
  if (!region) return;

  activeRegion = region.nombre;

  regionTitle.textContent = region.nombre;
  regionTextA.textContent = region.textoA;
  regionTextB.textContent = region.textoB;
  regionFrame.src = region.archivo;
  regionFrame.title = `Gráfico regional de ${region.nombre}`;
  regionCaption.textContent = `Evolución regional de votos nulos y blancos en ${region.nombre}.`;

  renderRegions();
}

if (regionSearch) {
  regionSearch.addEventListener("input", renderRegions);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeZone = button.dataset.zone;
    renderRegions();
  });
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function centerCharts() {
  const iframes = document.querySelectorAll(".chart-frame iframe, .region-frame iframe");

  iframes.forEach((iframe) => {
    iframe.addEventListener("load", () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.body.style.margin = "0";
        doc.body.style.padding = "16px";
        doc.body.style.display = "flex";
        doc.body.style.justifyContent = "center";
        doc.body.style.alignItems = "flex-start";
        doc.body.style.background = "#ffffff";

        const chart = doc.querySelector(".vega-embed");
        if (chart) {
          chart.style.margin = "0 auto";
          chart.style.maxWidth = "100%";
        }
      } catch (error) {
        console.log("No se pudo centrar este gráfico:", error);
      }
    });
  });
}

renderRegions();
setRegion("Antofagasta");
centerCharts();
