import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

type Props = {
  dias: string[];
  temperaturas: number[];
  vientos: number[];
};

function combineArrays(
  dias: string[],
  temperaturas: number[],
  vientos: number[]
) {
  return dias.map((dia, index) => ({
    id: index + 1,
    dia,
    temperatura: temperaturas[index],
    viento: vientos[index],
  }));
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'dia', headerName: 'Día', width: 120 },
  { field: 'temperatura', headerName: 'Temperatura (°C)', width: 160 },
  { field: 'viento', headerName: 'Viento (km/h)', width: 150 },
  {
    field: 'resumen',
    headerName: 'Resumen',
    width: 250,
    sortable: false,
    hideable: false,
    description: 'Resumen de la fila',
    valueGetter: (_, row) =>
      `El ${row.dia} habrá ${row.temperatura}°C y ${row.viento} km/h`,
  },
];

export default function TableTempWind({
  dias,
  temperaturas,
  vientos,
}: Props) {
  const rows = combineArrays(dias, temperaturas, vientos);

  return (
    <Box sx={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
