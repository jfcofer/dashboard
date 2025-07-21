import type { Alert } from "../../../types";

// A "private" utility function for this component
const getIconForSeverity = (severity: string) => {
  if (severity === 'Severe') return '🚨';
  if (severity === 'Moderate') return '⚠️';
  return 'ℹ️';
};

type AlertItemProps = {
  alert: Alert;
};

// This component is not exported from the feature's main index.ts,
// making it "private" to the AlertsModule.
export function AlertItem({ alert }: AlertItemProps) {
  return (
    <li style={{ border: '1px solid grey', margin: '0.5rem 0', padding: '0.5rem' }}>
      <h4>
        {getIconForSeverity(alert.severity)} {alert.event}
      </h4>
      <p>{alert.description}</p>
    </li>
  );
}
