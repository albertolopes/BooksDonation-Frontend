import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
        sx={ style }
      >
       Testando
      </Container>
    </React.Fragment>
  );
}

const style = {
    bgcolor: '#000000',     
    height: '50px',
}

