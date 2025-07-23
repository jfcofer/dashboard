import { CloudRain } from "lucide-react";
import type { AlertRule } from "./base";
import type { Alert } from "../types/types";

const FLOOD_MM = 50; // mm en 24 h → aviso
const LOOK_D = 1; // sólo mañana

export const floodRule: AlertRule = {
  evaluate(data): Alert | null {
    const sum = data.daily.precipitation_sum[LOOK_D];
    if (sum < FLOOD_MM) return null;

    return {
      id: 0,
      type: "warning",
      severity: sum > 100 ? "Alta" : "Media",
      title: "Lluvias Intensas",
      description: `Precipitación prevista ${sum.toFixed(0)} mm/24h`,
      icon: CloudRain,
      time: "24 horas",
      recommendations: [
        "Revisar drenajes y canales",
        "Proteger maquinaria y fertilizantes",
        "Evaluar riesgo de erosión",
      ],
    };
  },
};
