import React from 'react';
import Grid from '@mui/material/Grid';
import '../App.css';
import { useTheme, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    //const [theme, setTheme] = useState(props.theme);
    const theme = useTheme();

    return(
<Box sx={{ flexGrow: 1 }} container >
    <Grid container columns={{xs:12, sm:12, md:12, lg:12}} direction="row" mt={{xs:2}}>
        <Grid item xs={12} sm={12} md={12} lg={1} container alignItems="center" justifyContent={{xs:"center", lg:"flex-start"}}        >
            <a href="https://twitter.com/BabytoshiNews" target='_blank' rel="noopener noreferrer"><TwitterIcon style={{color:theme.palette.text.primary}} /></a>
            <a href="https://t.me/BabyToshiOfficial" target='_blank' rel="noopener noreferrer"><TelegramIcon style={{color:theme.palette.text.primary}} /></a>
            <a href="https://github.com/babytoshi" target='_blank' rel="noopener noreferrer"><GitHubIcon style={{color:theme.palette.text.primary}} /></a>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg container alignItems="center" justifyContent={{xs:"center", lg:"flex-end"}}        >
            <Typography mr={{sm:0.5}}>© <a href="https://babytoshi.io" style={{color:theme.palette.primary.main}}>BabyToshi.io</a> 2021 - v0.1.3</Typography>
            <Typography mr={{sm:0.5}}><a href="mailto:contact@babytoshi.io" style={{color:theme.palette.primary.main}}>contact@babytoshi.io</a></Typography>
            <Typography mr={{sm:0.5}}>| Informations : <a href="mailto:info@babytoshi.io" style={{color:theme.palette.primary.main}}>info@babytoshi.io</a></Typography>
            <Typography mr={{sm:0.5}}>| Marketing : <a href="mailto:marketing@babytoshi.io" style={{color:theme.palette.primary.main}}>marketing@babytoshi.io</a></Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} container alignItems="center" justifyContent={"center"} mt={1}>
            <Typography>All rights reserved</Typography>
        </Grid>
    </Grid>
</Box>
    );
  }
 