import { Thermometer, ThermometerSnowflake } from "lucide-react";
import type { AlertRule } from "./base";
import { parseIsoGmt, hoursBetween, humanize } from "../utils/datetime";
import type { Alert } from "../types/types";

const LOOK_AHEAD = 48; // h
const WARN_T = 0; // °C
const DANGER_T = -5; // °C

export const frostRule: AlertRule = {
  evaluate(data): Alert | null {
    const temps = data.hourly.temperature_2m.slice(0, LOOK_AHEAD);
    const times = data.hourly.time.slice(0, LOOK_AHEAD);
    const minT = Math.min(...temps);
    if (minT >= WARN_T) return null;

    const idx = temps.indexOf(minT);
    const now = parseIsoGmt(data.current.time);
    const eta = parseIsoGmt(times[idx]);
    const hrs = hoursBetween(now, eta);

    return {
      id: 0,
      type: "warning",
      severity: minT <= DANGER_T ? "Alta" : "Media",
      title: "Riesgo de Helada",
      description: `Mínima prevista ${minT.toFixed(1)}°C en ${humanize(hrs)}`,
      icon: minT <= DANGER_T ? ThermometerSnowflake : Thermometer,
      time: humanize(hrs),
      recommendations: [
        "Activar sistemas de protección",
        "Riego preventivo",
        "Monitoreo continuo",
      ],
    };
  },
};
