import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ButtonGroup from './ButtonGroup'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
        sx={ style }

        maxWidth="sx"
      >
        <ButtonGroup/>
      </Container>
    </React.Fragment>
  );
}

const style = {
  bgcolor:"#888888",
}

