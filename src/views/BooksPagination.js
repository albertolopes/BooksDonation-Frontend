
import React from 'react';

import { Box, Grid } from '@material-ui/core';
import AppBar from '../components/AppBar'
import Container from '@mui/material/Container';
import ButtonGroup from '../components/ButtonGroup'
import Divider from '@mui/material/Divider';
import NestedList from '../components/NestedList'

export default function BooksPagination() {
    return (
      <>
        <AppBar/>
            <Container 
                sx={ styleContainer1} maxWidth={false}
            >
        {/* <ButtonGroup/> */}
        <Grid
        container
        spacing={12}
        >
            <Grid
                item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
            >
                <ButtonGroup/>
            </Grid>

            <Grid
                item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
            >
                <Divider/>
            </Grid>

            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
            <NestedList/>
            </Grid>
        </Grid>
            </Container>
      </>
    );
}


const styleContainer1 = {  
    alignItems: 'center',
    margin: '5px;'
}

const styleContainer2 = {    
    alignItems: 'center',
    top:'50px'
}

