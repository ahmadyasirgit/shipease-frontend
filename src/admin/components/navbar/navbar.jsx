import React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Grid } from '@mui/material';
import { appBarStyles } from './config.js';
import UserInfo from './userInfo';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" elevation={3} sx={appBarStyles}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={4} md={7}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'left',
              }}
            >
              <img
                src={require('../../resources/shipease.png')}
                alt="ShipEase-logo"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'right ',
                justifyContent: 'center',
              }}
            >
              <InputBase
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: '14px',
                  backgroundColor: theme.palette.buttonSidebar.main,
                  paddingLeft: '15px',
                  width: '100%',
                  color: theme.palette.buttonSidebar.ColorActiveHover,
                }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                startAdornment={
                  <SearchIcon
                    sx={{
                      color: theme.palette.buttonSidebar.ColorActiveHover,
                      marginRight: '18px',
                    }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <UserInfo />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
