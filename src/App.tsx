import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {
  return (
    <>
      <Grid container spacing={5} display="flex" justifyContent="center" alignItems="center">

        {/* Encabezado */}
        <Grid size={{ xs: 12, md: 12 }} sx={{
          justifyContent: "center",
          alignItems: "center",
        }}><HeaderUI /></Grid>

        {/* Alertas */}
        <Grid size={{ xs: 12, md: 12 }} display="flex" justifyContent="center" alignItems="center">
          <AlertUI description="No se preveen lluvias" />
        </Grid>

        {/* Selector */}
        <Grid size={{ xs: 12, md: 3 }} display="flex" justifyContent="center" alignItems="center"><SelectorUI /></Grid>

        {/* Indicadores */}
        <Grid size={{ xs: 12, md: 9 }} display="flex" justifyContent="center" alignItems="center">Elemento: Indicadores</Grid>

        {/* Gráfico */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "flex" } }} justifyContent="center" alignItems="center">Elemento: Gráfico</Grid>

        {/* Tabla */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "flex" } }} justifyContent="center" alignItems="center">Elemento: Tabla</Grid>

        {/* Información adicional */}
        <Grid size={{ xs: 12, md: 12 }} display="flex" justifyContent="center" alignItems="center">Elemento: Información adicional</Grid>

      </Grid >
    </>
  )
}

export default App
