import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={ buttonStyle }
    >
      
      <ButtonGroup size="small" variant="text" aria-label="text button group" fullWidth={true}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
}

const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      m: 1,
    },
  }