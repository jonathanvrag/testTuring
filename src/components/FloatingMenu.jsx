import { PermMedia, Store } from '@mui/icons-material';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const buttonMenu = [
  { icon: <Store />, name: 'Obtener laminas' },
  { icon: <PermMedia />, name: 'Mi álbum' },
];

export default function FloatingMenu() {
  return (
    <Box>
      <SpeedDial
        ariaLabel='Menú de Test Turing'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}>
        {buttonMenu.map((button, index) => (
          <SpeedDialAction
            key={index}
            icon={button.icon}
            tooltipTitle={button.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
