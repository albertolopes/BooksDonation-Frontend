import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={ boxStyle }
    >      
      <ButtonGroup size="small" variant="string" color="inherit" aria-label="text button group" fullWidth={true}>
        <Button>Ficção</Button>
        <Button>Romance</Button>
        <Button>Didáticos</Button>
        <Button>Infantil</Button>
        <Button>Política</Button>
        <Button>História</Button>
        <Button>Ciência</Button>
      </ButtonGroup>
    </Box>
  );
}

const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      m: 1,
  },
}

const buttonStyle ={
  bgcolor:"#e3f2fd"
}