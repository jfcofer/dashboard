import type { OpenMeteoResponse } from "@/services/openMeteo/openMeteo.types";
import type { Alert } from "../types/types";

export interface AlertRule {
  evaluate(data: OpenMeteoResponse): Alert | null;
}
