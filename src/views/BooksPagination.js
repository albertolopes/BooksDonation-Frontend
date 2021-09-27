
import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import { Box, Grid } from '@material-ui/core';
import AppBar from '../components/AppBar'
import Container from '../components/Container';
import ButtonGroup from '../components/ButtonGroup'
import Divider from '@mui/material/Divider';
import NestedList from '../components/NestedList';
import Dropdown from '../components/Dropdown';
import Paper from '@mui/material/Paper';

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
        <Grid container>           
            <Grid item xs={2}>
                <Grid container>
                    <Grid item xs={11}>
                        <NestedList/>   
                    </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical"/>  
                    </Grid>                
                </Grid>           
                           
            </Grid>        
            <Grid item xs={10}>
                <Box sx={ BoxStyle }>
                    <Dropdown/>                        
                </Box>
            </Grid>
        </Grid>
{/* 
        <Grid
        container
        spacing={3}
        >           

            <Grid
                lg={2}
                sm={2}
                xl={2}
                xs={2}
            >
                <NestedList/>
            </Grid>

            <Grid
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
                     lg={12, {display: 'flex'}}
                     sm={12, {display: 'flex'}}
                     xl={12, {display: 'flex'}}
                     xs={12, {display: 'flex'}}
                >
                    <Box sx={ BoxStyle }>
                        <Dropdown/>                        
                    </Box>
                    <Divider/>
                </Grid>
            </Grid>
            
        </Grid> */}
      </>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const BoxStyle = {
    display: 'flex',
    flexDirection: 'row-reverse',
    bgcolor: 'background.paper',
  }
  


const styleContainer1 = {     
    bgcolor: '#cfe8fc',
    alignItems: 'center',
}

