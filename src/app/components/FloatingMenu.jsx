'use client';

import { PermMedia, Store } from '@mui/icons-material';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { useRouter } from 'next/navigation';

const buttonMenu = [
  { icon: <Store />, name: 'Obtener laminas', path: '/get-sheets' },
  { icon: <PermMedia />, name: 'Mi álbum', path: '/' },
];

export default function FloatingMenu() {
  const router = useRouter();

  const handleNavigation = path => {
    router.push(path);
  };

  return (
    <Box>
      <SpeedDial
        ariaLabel='Menú de Test Turing'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}>
        {buttonMenu.map((button, index) => (
          <SpeedDialAction
            key={index}
            icon={button.icon}
            tooltipTitle={button.name}
            onClick={() => handleNavigation(button.path)}
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: '1.2rem',
                },
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
