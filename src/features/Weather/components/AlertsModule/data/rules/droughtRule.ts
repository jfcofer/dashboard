import { Droplets } from "lucide-react";
import type { AlertRule } from "./base";
import type { Alert } from "../types/types";

const CRITICAL_SOIL = 0.2; // 20 %
const FUTURE_DAYS = 3;
const NO_RAIN_MM = 1; // ≈ “sin precipitación”

export const droughtRule: AlertRule = {
  evaluate(data): Alert | null {
    const soil = data.hourly.soil_moisture_0_to_1cm[0];
    if (soil > CRITICAL_SOIL) return null;

    const futureRain = data.daily.precipitation_sum
      .slice(0, FUTURE_DAYS)
      .reduce((a, b) => a + b, 0);

    if (futureRain > NO_RAIN_MM) return null;

    return {
      id: 0,
      type: "danger",
      severity: "Alta",
      title: "Sequía Prolongada",
      description: `Humedad del suelo crítica: ${(soil * 100).toFixed(0)} %`,
      icon: Droplets,
      time: `${FUTURE_DAYS} días`,
      recommendations: [
        "Iniciar riego inmediato",
        "Optimizar turnos de agua",
        "Revisar eficiencia del sistema de irrigación",
      ],
    };
  },
};
