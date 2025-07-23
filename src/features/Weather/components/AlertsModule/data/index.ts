import { frostRule } from "./rules/frostRule";
import { heatRule } from "./rules/heatRule";
import { droughtRule } from "./rules/droughtRule";
import { floodRule } from "./rules/floodRule";
import { windRule } from "./rules/windRule";
import { uvRule } from "./rules/uvRule";
import { waterlogRule } from "./rules/waterlogRule";
import type { OpenMeteoResponse } from "@/services/openMeteo/openMeteo.types";
import type { Alert } from "./types/types";

const RULES = [
  frostRule,
  heatRule,
  droughtRule,
  floodRule,
  windRule,
  uvRule,
  waterlogRule,
];

export function generateAlerts(data: OpenMeteoResponse): Alert[] {
  let id = 1;
  return RULES.map((r) => r.evaluate(data))
    .filter((a): a is Alert => a !== null)
    .map((a) => ({ ...a, id: id++ }));
}
