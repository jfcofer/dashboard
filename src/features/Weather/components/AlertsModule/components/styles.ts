import type { Severity } from "../data/types/types";

const ALERT_STYLE: Record<Severity, string> = {
  Crítica: "alert-danger   border-l-4   border-l-red-800",
  Alta: "alert-danger    border-l-4    border-l-red-600",
  Media: "alert-warning border-l-4  border-l-yellow-300",
  Baja: "alert-info border-l-4  border-l-green-300",
};

const SEVERITY_STYLE: Record<Severity, string> = {
  Crítica: "bg-red-200   text-red-900   border-red-300",
  Alta: "bg-red-100   text-red-800   border-red-200",
  Media: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Baja: "bg-green-100  text-green-800  border-green-200",
};

export const getAlertStyle = (type: Severity): string => ALERT_STYLE[type];
export const getSeverityColor = (sev: Severity): string => SEVERITY_STYLE[sev];
