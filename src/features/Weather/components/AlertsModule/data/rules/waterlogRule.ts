import { Droplet } from "lucide-react";
import type { AlertRule } from "./base";
import type { Alert } from "../types/types";

const SAT_SOIL = 0.45; // >45 % volum.
const NEXT_RAIN_MM = 20; // lluvia adicional mañana

export const waterlogRule: AlertRule = {
  evaluate(data): Alert | null {
    const soil = data.hourly.soil_moisture_0_to_1cm[0];
    const rain = data.daily.precipitation_sum[0];

    if (soil < SAT_SOIL || rain < NEXT_RAIN_MM) return null;

    return {
      id: 0,
      type: "warning",
      severity: "Media",
      title: "Suelo Saturado",
      description: `Humedad 0‑1 cm ${(soil * 100).toFixed(0)} % con +${rain} mm de lluvia`,
      icon: Droplet,
      time: "Hoy",
      recommendations: [
        "Evitar ingreso de maquinaria pesada",
        "Mejorar drenaje de parcelas",
        "Monitorear raíces por falta de oxígeno",
      ],
    };
  },
};
