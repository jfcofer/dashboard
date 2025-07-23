import type { LucideIcon } from "lucide-react";

export type AlertType = "info" | "warning" | "danger";

export type Severity = "Baja" | "Media" | "Alta" | "Crítica";

export interface Alert {
  id: number; // assigned in generateAlerts
  type: AlertType;
  severity: Severity;
  title: string;
  description: string;
  icon: LucideIcon;
  time: string; // “6 horas”, “2 días”, etc.
  recommendations: string[];
}
