import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

type Props = {
  labels: string[];
  temperatura: number[];
  viento: number[];
};

export default function ChartTempWind({ labels, temperatura, viento }: Props) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Variación Semanal
      </Typography>
      <LineChart
        height={300}
        series={[
          { data: temperatura, label: 'Temperatura (°C)', color: '#f97316' },
          { data: viento, label: 'Viento (km/h)', color: '#3b82f6' },
        ]}
        xAxis={[{ scaleType: 'point', data: labels }]}
        margin={{ bottom: 30 }}
      />
    </>
  );
}
