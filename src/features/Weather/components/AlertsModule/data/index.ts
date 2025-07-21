import type { OpenMeteoResponse } from "../../../../../services/openMeteo/openMeteo.types";
import type { Alert } from "../../../types";

function generateAlerts(data: OpenMeteoResponse): Alert[] {
  return [
    {
      id: "a1",
      severity: "High",
      event: "Plaga de langostas",
      description:
        "Se ha detectado una invasión de langostas en la zona norte del cultivo de maíz. Se recomienda aplicar control biológico inmediato.",
    },
    {
      id: "a2",
      severity: "Moderate",
      event: "Sequía prolongada",
      description:
        "La región ha registrado 15 días sin lluvias. Se sugiere implementar sistemas de riego por goteo para evitar el estrés hídrico en las plantas.",
    },
    {
      id: "a3",
      severity: "Low",
      event: "Recomendación de fertilización",
      description:
        "Es el momento óptimo para aplicar fertilizantes nitrogenados en los cultivos de arroz.",
    },
  ];
}
export { generateAlerts };
