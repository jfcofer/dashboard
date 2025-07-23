import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

type Props = {
  labels: string[];
  acumulada: number[];
  probabilidad: number[];
};

export default function ChartUI({ labels, acumulada, probabilidad }: Props) {
  return (
    <>
      <Typography variant="h6" component="h3" gutterBottom>
        Precipitación Semanal
      </Typography>
      <LineChart
        height={300}
        series={[
          { data: acumulada, label: 'Acumulada (mm)', color: '#007bff' },
          { data: probabilidad, label: 'Probabilidad (%)', color: '#9932CC' },
        ]}
        xAxis={[{ scaleType: 'point', data: labels }]}
        margin={{ bottom: 30 }}
      />
    </>
  );
}
