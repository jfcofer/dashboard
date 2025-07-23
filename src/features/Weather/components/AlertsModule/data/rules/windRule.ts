import { Wind } from "lucide-react";
import type { AlertRule } from "./base";
import { parseIsoGmt, hoursBetween, humanize } from "../utils/datetime";
import type { Alert } from "../types/types";

const LOOK_AHEAD = 24; // h
const WARN_GUST = 50; // km/h
const DANGER_G = 70; // km/h

export const windRule: AlertRule = {
  evaluate(data): Alert | null {
    const gusts = data.hourly.wind_gusts_10m.slice(0, LOOK_AHEAD);
    const times = data.hourly.time.slice(0, LOOK_AHEAD);
    const maxG = Math.max(...gusts);
    if (maxG < WARN_GUST) return null;

    const idx = gusts.indexOf(maxG);
    const hrs = hoursBetween(
      parseIsoGmt(data.current.time),
      parseIsoGmt(times[idx]),
    );

    return {
      id: 0,
      type: "warning",
      severity: maxG >= DANGER_G ? "Alta" : "Media",
      title: "Vientos Fuertes",
      description: `Ráfagas de hasta ${maxG.toFixed(0)} km/h`,
      icon: Wind,
      time: humanize(hrs),
      recommendations: [
        "Asegurar invernaderos y plásticos",
        "Postergar aplicaciones foliares",
        "Reforzar tutores de cultivos altos",
      ],
    };
  },
};
