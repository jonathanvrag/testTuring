import { PermMedia, Store } from '@mui/icons-material';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const buttonMenu = [
  { icon: <Store />, name: 'Obtener laminas', path: '/get-sheets' },
  { icon: <PermMedia />, name: 'Mi álbum', path: '/' },
];

export default function FloatingMenu() {
  const navigate = useNavigate();

  const handleClick = path => {
    navigate(path);
  };

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
            onClick={() => handleClick(button.path)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
