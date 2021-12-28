import React, {useState, useEffect, useRef} from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import SwapVertIcon from '@mui/icons-material/SwapVert';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import babytoshiLogoAndText from "../images/logo/babytoshi_logo_text.png";
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import About from "./About/About";
import Overview from "./Overview/Overview";
import Games from "./Games/Games";
import WhitePaper from './WhitePaper/WhitePaper';
import LockCertificate from "./LockCertificate/LockCertificate";
import Swap from "./Swap/Swap";

import InfoIcon from '@mui/icons-material/Info'; //About
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi'; //Toshifllip

import GridViewIcon from '@mui/icons-material/GridView'; //Overview
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'; //Whitepaper
import LockClockIcon from '@mui/icons-material/LockClock'; //Lock certificate
import LanguageIcon from '@mui/icons-material/Language'; //Website
import Brightness4Icon from '@mui/icons-material/Brightness4'; //Light Mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; //Dark Mode

const NAME_PAGE_ABOUT = "About";
const NAME_PAGE_GAMES = "Games";
const NAME_PAGE_OVERVIEW = "Overview";
const NAME_PAGE_SWAP = "Swap";
const NAME_PAGE_WHITEPAPER = "White paper";
const NAME_PAGE_LOCKCERTIFICATE = "Lock certificate";
const LINK_WEBSITE = "https://babytoshi.io";

const drawerWidth = 240;

export default function Dashboard(props) {
  const theme = useTheme();
  const {colorMode, goodNetwork, ethereum, updatePlayer, player } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [namePage, setNamePage] = useState(NAME_PAGE_ABOUT);
  const [content, setContent] = useState(<About />);

  const divApp = useRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(()=>{
      init();
      async function init(){
        let _content = null;
        if( namePage === NAME_PAGE_ABOUT ){
          _content = <About />;
        }else if( namePage === NAME_PAGE_GAMES ){
          _content = <Games ethereum={ethereum} player={player} updatePlayer={updatePlayer} />;
        }else if( namePage === NAME_PAGE_OVERVIEW ){
          _content = <Overview ethereum={ethereum} player={player} />;
        }else if( namePage === NAME_PAGE_SWAP ){
          _content = <Swap />;
        }else if( namePage === NAME_PAGE_WHITEPAPER ){
          _content = <WhitePaper />;
        }else if( namePage === NAME_PAGE_LOCKCERTIFICATE ){
          _content = <LockCertificate />;
        }
        setContent(_content);
      }

  }, [player, namePage]);

  const drawer = (
    <div>
        
      <Grid item p={1} mb={1} border='none' container justifyContent={"center"} alignItems={"center"}>
      <a href='https://babytoshi.io' target='_blank' rel="noopener noreferrer">
      <img width='150vmin' src={babytoshiLogoAndText} alt="babytoshi logo" loading='lazy' />
      </a>
      </Grid>
      <Grid item p={1}>
          <List >

          <ListItem button sx={{backgroundColor:namePage===NAME_PAGE_ABOUT ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='about' onClick={()=>{
                    //setNPage(0);
                    //setActualPath(LINK_ABOUT);
                    setNamePage(NAME_PAGE_ABOUT);
                }} >
                <ListItemIcon style={{verticalAlign:'middle'}}>
                
                <InfoIcon fontSize={"large"} style={{color:namePage===NAME_PAGE_ABOUT ? theme.palette.text.secondary : theme.palette.text.primary}} />
                {/*                  <img width='60%' src={actualPath===LINK_ABOUT || actualPath===LINK_DEFAULT ? (theme.palette.mode === 'light' ? aboutIconWhite : aboutIconBlack) : (theme.palette.mode === 'light' ? aboutIconBlack : aboutIconWhite)} />
*/}
                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:namePage===NAME_PAGE_ABOUT ? theme.palette.background.default : theme.palette.background.reverse}}>{NAME_PAGE_ABOUT}</Typography>} />
            </ListItem>


            <ListItem button sx={{backgroundColor:namePage===NAME_PAGE_GAMES ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='games' onClick={()=>{
                    //setNPage(1);
                    //setActualPath(LINK_GAMES);
                    setNamePage(NAME_PAGE_GAMES);
                    //console.log({LOCATION: container});
                }} >
                <ListItemIcon style={{verticalAlign:'middle'}}>
                <SportsKabaddiIcon fontSize={"large"} style={{color:namePage===NAME_PAGE_GAMES ? theme.palette.text.secondary : theme.palette.text.primary}} />

                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:namePage===NAME_PAGE_GAMES ? theme.palette.text.secondary : theme.palette.text.primary}}>{NAME_PAGE_GAMES}</Typography>} />
            </ListItem> 
          
          
          <ListItem button sx={{backgroundColor:namePage===NAME_PAGE_OVERVIEW ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='overview' onClick={()=>{
            //setNPage(0);
            setNamePage(NAME_PAGE_OVERVIEW);
            //setActualPath(LINK_OVERVIEW);
        }} >
        <ListItemIcon style={{verticalAlign:'middle'}}>
        <GridViewIcon fontSize={"large"} style={{color:namePage===NAME_PAGE_OVERVIEW ? theme.palette.text.secondary : theme.palette.text.primary}} />
        </ListItemIcon>
        <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:namePage===NAME_PAGE_OVERVIEW ? theme.palette.background.default : theme.palette.background.reverse}}>{NAME_PAGE_OVERVIEW}</Typography>} />
    </ListItem>

    <ListItem button sx={{backgroundColor:namePage===NAME_PAGE_SWAP ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='swap' onClick={()=>{
                    //setNPage(3);
                    //setActualPath(LINK_SWAP);
                    setNamePage(NAME_PAGE_SWAP);
                    
                }}>
                <ListItemIcon>
                <SwapVertIcon fontSize={"large"} style={{transform:"rotate(330deg)", color:namePage===NAME_PAGE_SWAP ? theme.palette.text.secondary : theme.palette.text.primary}} />
                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:namePage===NAME_PAGE_SWAP ? theme.palette.background.default : theme.palette.background.reverse}}>Bogged {NAME_PAGE_SWAP}</Typography>} />
            </ListItem>


            {/*
            <Link to={LINK_SUBSCRIBE}>
            <ListItem button sx={{backgroundColor:actualPath===LINK_SUBSCRIBE ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='subscribe' onClick={()=>{
                    //setNPage(2);
                    setActualPath(LINK_SUBSCRIBE);
                }} >
                <ListItemIcon style={{verticalAlign:'middle'}}>
                  
                  <img width='60%' src={actualPath===LINK_SUBSCRIBE ? (theme.palette.mode === 'light' ? subscribeIconWhite : subscribeIconBlack) : (theme.palette.mode === 'light' ? subscribeIconBlack : subscribeIconWhite)} />
                </ListItemIcon>
                <ListItemText primary={<Typography style={{fontWeight:'bold',color:actualPath===LINK_SUBSCRIBE ? theme.palette.background.default : theme.palette.background.reverse}}>Subscribe</Typography>} />
            </ListItem>
            </Link>
            */}

            
            
            {/*
            <Link to={LINK_SWAP}>
            <ListItem button sx={{backgroundColor:actualPath===LINK_SWAP ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='swap' onClick={()=>{
                    //setNPage(3);
                    //setActualPath(LINK_SWAP);
                }}>
                <ListItemIcon>
                <SwapVertIcon fontSize={"large"} style={{transform:"rotate(330deg)", color:actualPath===LINK_SWAP ? theme.palette.text.secondary : theme.palette.text.primary}} />
                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:actualPath===LINK_SWAP ? theme.palette.background.default : theme.palette.background.reverse}}>Bogged Swap</Typography>} />
            </ListItem>
            </Link>
            */}
            
            <ListItem button sx={{backgroundColor:namePage===NAME_PAGE_WHITEPAPER ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='white-paper' onClick={()=>{
                    //setNPage(5);
                    //setActualPath(LINK_WHITE_PAPER);
                    setNamePage(NAME_PAGE_WHITEPAPER);
                }}>
                <ListItemIcon>
                  <HistoryEduIcon fontSize={"large"} style={{color:namePage===NAME_PAGE_WHITEPAPER ? theme.palette.text.secondary : theme.palette.text.primary}} />
                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:namePage===NAME_PAGE_WHITEPAPER ? theme.palette.background.default : theme.palette.background.reverse}}>White paper</Typography>} />
            </ListItem>

            
            <ListItem button sx={{backgroundColor:namePage===NAME_PAGE_LOCKCERTIFICATE ? theme.palette.primary.main : 'transparent', borderRadius:2}} key='lock-certificate' onClick={()=>{
                    //setNPage(6);
                    //setActualPath(LINK_LOCK_CERTIFICATE);
                    setNamePage(NAME_PAGE_LOCKCERTIFICATE);
                }}>
                <ListItemIcon>
                <LockClockIcon fontSize={"large"} style={{color:namePage===NAME_PAGE_LOCKCERTIFICATE ? theme.palette.text.secondary : theme.palette.text.primary}} />

                
                    {/*<LockClockIcon style={{color:actualPath===LINK_LOCK_CERTIFICATE ? theme.palette.background.default : theme.palette.background.reverse}} />*/}
                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:namePage===NAME_PAGE_LOCKCERTIFICATE ? theme.palette.background.default : theme.palette.background.reverse}}>Lock certificate</Typography>} />
            </ListItem>
            

            <a href={LINK_WEBSITE} style={{color: theme.palette.background.reverse, marginBottom:10}}>
            <ListItem button sx={{backgroundColor:'transparent', borderRadius:2}} key='website'>
                <ListItemIcon >
                    <LanguageIcon fontSize={"large"} style={{color:theme.palette.background.reverse}} />
                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:theme.palette.background.reverse}}>
                            Website
                        </Typography>} />
            </ListItem>
            </a>
            
            <Divider/>
            <ListItem button  key='theme-mode' onClick={colorMode.toggleColorMode}>
                <ListItemIcon >
                {theme.palette.mode === 'light' ? <Brightness7Icon fontSize={"large"} style={{color:theme.palette.text.primary}} /> : <Brightness4Icon fontSize={"large"} style={{color:theme.palette.text.primary}} />}
                </ListItemIcon>
                <ListItemText primary={<Typography sx={{fontSize:{xs:"2.3vmax",sm:"1.8vmax", md:"1.3vmax"},}} style={{color:theme.palette.background.reverse}}>
                            Theme mode
                        </Typography>} />
            </ListItem>
            <Divider/>
            </List>
        </Grid>
    </div>
  );

  //const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} 
        //border='2px red solid'
        //style={{border:'2px solid red'}}
        elevation={5}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        //style={{backgroundColor:'red'}}
        //border='2px solid red'
        sx={{
            color:{color:theme.palette.text.secondary},
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar  
        style={{backgroundColor:theme.palette.background.default}}
            //border='2px solid red'
        >
          <IconButton
          //background='black'
            //color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <Grid container ref={divApp} style={{backgroundColor:theme.palette.background.default, }} p={1} columns={{xs:12, sm:12, md:12}} columnSpacing={0} rowSpacing={1} direction="row" justifyContent='center'
        //border='3px solid green'
        >
            <Grid item xs={12} sm={12} md={12}
            //border='2px solid blue'
            >
                <Header 
                    //style={{border:'1px blue solid'}}
                    key='header'
                    colorMode={colorMode}
                    //themes={themes}
                    //theme={theme}
                    goodNetwork={goodNetwork}
                    ethereum={ethereum} player={player} updatePlayer={updatePlayer}
                    //networkId={networkId}
                />
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <Box
      //style={{border:'2px solid red'}}
      //style={{backgroundColor:'red'}}
        component="nav"
        elevation={5}
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
        //style={{backgroundColor:'red'}}
        //style={{border:'2px solid red'}}
          variant="permanent"
          //border='2px solid red'
          sx={{
            display: { xs: 'none', sm: 'block' },
            //border:'2px solid red',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box

        component="main"
        sx={{ flexGrow: 1, p: {xs:1, md:1}, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Grid container columns={{xs:12, sm:12, md:12}} mt={5} mb={5}
            //border='2px solid blue'
            >
              {content}
                {/*<MyRouter ethereum={ethereum} player={player} updatePlayer={updatePlayer} />*/}
                
        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={3} mb={2}
            //border='2px solid blue'
            >
                <Grid container columns={{xs:12, sm:12, md:12}} justifyContent='center' alignItems='center'>
                    <a href="https://a-ads.com?partner=1850566" style={{fontWeight:'bold', color:theme.palette.primary.main}} target='_blank' rel="noopener noreferrer">Visit A-Ads</a>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} mb={2}
            //border='2px solid blue'
            >
                <Grid container columns={{xs:12, sm:12, md:12}} justifyContent='center' alignItems='center'>
                    <iframe title='frame-ads' data-aa="1850566" src="//ad.a-ads.com/1850566?size=728x90" style={{width:'728px', height:'90px', border:'0px', padding:0, overflow:'hidden', backgroundColor: 'transparent'}} ></iframe>    
                </Grid>
            </Grid>

            <Divider />
            <Footer key='footer'
                    colorMode={colorMode}
                    //themes={themes}
                    //theme={theme}
                    ethereum={ethereum} player={player} updatePlayer={updatePlayer}
                    //goodNetwork={goodNetwork}
                    //networkId={networkId}
                     />
            
      </Box>
      
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

//export default Dashboard;
