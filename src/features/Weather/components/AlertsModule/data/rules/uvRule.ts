import { Sun } from "lucide-react";
import type { AlertRule } from "./base";
import type { Alert } from "../types/types";

const WARN_UV = 8;
const DANGER_UV = 10;

export const uvRule: AlertRule = {
  evaluate(data): Alert | null {
    const uv = data.daily.uv_index_max[0];
    if (uv < WARN_UV) return null;

    return {
      id: 0,
      type: "info",
      severity: uv >= DANGER_UV ? "Alta" : "Media",
      title: "Radiación UV Elevada",
      description: `Índice UV previsto: ${uv.toFixed(1)}`,
      icon: Sun,
      time: "Hoy",
      recommendations: [
        "Ajustar horas de campo",
        "Usar protección solar y mangas largas",
        "Planificar tareas bajo sombra cuando sea posible",
      ],
    };
  },
};
