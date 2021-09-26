
import React from 'react';

import { Box, Grid } from '@material-ui/core';
import AppBar from '../components/AppBar'
import Container from '../components/Container';
import ButtonGroup from '../components/ButtonGroup'
import Divider from '@mui/material/Divider';
import NestedList from '../components/NestedList';
import Dropdown from '../components/Dropdown';

export default function BooksPagination(props) {
    return (
      <>
      
        <AppBar/>
        <Container 
            sx={ styleContainer1 } maxWidth={false}
        >
            <ButtonGroup/>
        </Container>

        {/* <Box  sx={{
          bgcolor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'secondary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
            <ButtonGroup/>
        </Box> */}
        <Grid
        container
        spacing={12}
        >
           

            <Grid
                item
                lg={2}
                sm={2}
                xl={2}
                xs={2}
            >
                <NestedList/>
            </Grid>

            <Grid
                item
                lg={0}
                sm={0}
                xl={0}
                xs={0}
            >
                <Divider orientation="vertical"/>
            </Grid>

            <Grid
                lg={9}
                sm={9}
                xl={9}
                xs={9}
            >
                <Grid
                item
                lg={12}
                sm={3}
                xl={3}
                xs={12}
                >
                    <Box  sx={{
                    bgcolor: 'primary.dark',
                    // '&:hover': {
                    //     backgroundColor: 'secondary.main',
                    //     opacity: [0.9, 0.8, 0.7],
                    // },
                    }}>
                        <Dropdown></Dropdown>
                    </Box>
                </Grid>
            </Grid>
            
        </Grid>
      </>
    );
}


const styleContainer1 = {     
    bgcolor: '#cfe8fc',
    alignItems: 'center',
}

const styleContainer2 = {    
    alignItems: 'center',
    top:'50px'
}

