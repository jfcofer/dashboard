import { ThermometerSun } from "lucide-react";
import type { AlertRule } from "./base";
import { parseIsoGmt, hoursBetween, humanize } from "../utils/datetime";
import type { Alert } from "../types/types";

const LOOK_AHEAD = 72; // h
const WARN_T = 35; // °C
const DANGER_T = 40; // °C

export const heatRule: AlertRule = {
  evaluate(data): Alert | null {
    const temps = data.hourly.temperature_2m.slice(0, LOOK_AHEAD);
    const times = data.hourly.time.slice(0, LOOK_AHEAD);
    const maxT = Math.max(...temps);
    if (maxT < WARN_T) return null;

    const idx = temps.indexOf(maxT);
    const hrs = hoursBetween(
      parseIsoGmt(data.current.time),
      parseIsoGmt(times[idx]),
    );

    return {
      id: 0,
      type: "danger",
      severity: maxT >= DANGER_T ? "Alta" : "Media",
      title: "Ola de Calor",
      description: `Máxima prevista ${maxT.toFixed(1)}°C en ${humanize(hrs)}`,
      icon: ThermometerSun,
      time: humanize(hrs),
      recommendations: [
        "Posponer labores intensas",
        "Incrementar riegos cortos y frecuentes",
        "Proteger personal y ganado del estrés térmico",
      ],
    };
  },
};
