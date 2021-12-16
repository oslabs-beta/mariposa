import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
const MariposaLogo = require('../assets/MariposaLogo.svg');

const pages = ['URI', 'Sandbox'];
const settings = ['Logout'];

const ResponsiveAppBar = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [redirect, setRedirect] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;



  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
    setRedirect(true);
    //window.open('/graphql', '_blank')
    // (props.graphiql) ? props.setGraphiql(false) : props.setGraphiql(true);
  };

  const handleSandbox = () => {
    window.open('/graphql', '_blank')
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUriDisplay = () =>{
    if(props.uriBtnClose === true){
     props.setHandleUriBtnClose(false)
    }
  }

  return (
    <div className="navAppBar">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MariposaQL
          </Typography> */}
          <img id ={"logo"} src={MariposaLogo} style={{ width: '20%' }}/>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {pages.map((page) => (
              page === "URI" ? 
                     <div>
                    <Button aria-describedby={id} type="button" onClick={() => {props.setUriBoolean(false)}} sx={{ my: 2, color: 'black', display: 'block' }}>
                      URI
                    </Button>
                </div> :
              page === "Sandbox" ?
              <div>
              <Button aria-describedby={id} type="button" onClick={handleSandbox} sx={{ my: 2, color: 'black', display: 'block' }}>
                SANDBOX
              </Button>
              </div> :
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
                {page}
              </Button>
            ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            MariposaQL
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              page === "URI" ? 
                     <div>
                    <Button aria-describedby={id} type="button" onClick={handleUriDisplay} sx={{ my: 2, color: 'white', display: 'block' }}>
                      URI
                    </Button>
                    </div> :
              page === "Sandbox" ?
                    <div>
                    <Button aria-describedby={id} type="button" onClick={handleSandbox} sx={{ my: 2, color: 'white', display: 'block' }}>
                      SANDBOX
                    </Button>
                    </div> :
                    <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                      {page}
                    </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LogoutIcon></LogoutIcon>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                  {redirect && (<Navigate to='/' />)}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        </Container>
      </div>
  );
};
export default ResponsiveAppBar;