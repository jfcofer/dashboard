
# 🌾 Dashboard Agroclimático

Aplicación web para agricultores, cooperativas y aseguradoras que **optimiza decisiones de siembra, riego, fumigación y cosecha** mediante datos meteorológicos de alta frecuencia y reglas agronómicas.

---

## 🚀 Valor que aporta

- **Reduce pérdidas** por eventos extremos (heladas, sequías, granizo).
- **Aumenta rendimiento** al sugerir las ventanas óptimas de riego y fumigación.
- **Integra sensores IoT** o estaciones locales para micro‑climas.
- **Facilita seguros agrarios** con datos trazables y alertas objetivas.

---

## 🔑 Indicadores clave

| Categoría                           | Métricas principales                                                                                |
| ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Precipitación & pronóstico**      | Precipitation Sum (daily), Rain, Showers, Snowfall, Precipitation Probability                       |
| **Alertas de riesgo**               | Heladas, Sequías, Granizo, Vientos fuertes (basado en Temperature, Soil Moisture, Wind Gusts, etc.) |
| **Temperatura y viento semanal promedio** | Soil Temperature (0, 6, 18 cm), Relative Humidity (2 m), Soil Moisture (0–27 cm)                    |

---

## 📊 Variables disponibles (Open‑Meteo)

<details>
<summary><strong>Hourly</strong></summary>

- Temperature (2 m)
- Relative Humidity (2 m)
- Dew Point (2 m)
- Apparent Temperature
- Precipitation Probability
- Rain / Showers / Snowfall
- Evapotranspiration & Reference ET₀
- Wind Speed (10 m) & Wind Gusts (10 m)
- Soil Temperature (0 cm, 6 cm, 18 cm)
- Soil Moisture (0–1, 1–3, 3–9, 9–27 cm)
</details>

<details>
<summary><strong>Daily</strong></summary>

- Sunshine Duration
- UV Index (max)
- Precipitation Sum
</details>

<details>
<summary><strong>Current</strong></summary>

- Temperature (2 m)
- Relative Humidity (2 m)
- Precipitation (last 15 min)
- Weather Code
- Cloud Cover (%)
</details>

---

## 🧩 Módulos funcionales

| Módulo                                           | Variables utilizadas                                                                |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **Precipitación acumulada & pronóstico**         | Precipitation Sum, Rain, Showers, Snowfall, Precipitation Probability, Weather Code |
| **Motor de alertas (heladas, sequías, granizo)** | Temperature, Dew Point, Soil Moisture, Evapotranspiration, Weather Code, Wind Gusts |
| **Temperatura del suelo & humedad relativa**     | Soil Temperature (0, 6, 18 cm), Relative Humidity (2 m)                             |

---

## 🎯 Público objetivo

- **Cooperativas agrícolas** (decisiones colectivas de riego y cosecha).
- **Empresas de agrotecnología** que integren dashboards en sus plataformas.
- **Aseguradoras agrarias** para parametrizar pólizas indexadas al clima.

---

## 🛠️ Stack & arquitectura

- **React + Vite + TypeScript** (frontend).
- **Tailwind CSS + shadcn/ui** para UI responsiva.
- **Open‑Meteo API** (datos horarios/día).
- **Alert Engine** basado en reglas puras (ver \`/src/rules/\*\`).

---
