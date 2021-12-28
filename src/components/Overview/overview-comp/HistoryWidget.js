import React, {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import "./historyWidget.css";
import Card from '@mui/material/Card';
import { Grid, Typography, Avatar, Stack } from '@mui/material';

const sizeCircle = {xs:120, sm:150, md:100, lg:140};

export default function HistoryWidget(props) {
  const theme = useTheme();
  const {player} = props;

  const [wins, setWins] = useState(0);
  const [looses, setLooses] = useState(0);

  useEffect(() => {

    if( player ){
        setWins(player.wins);
        setLooses(player.looses);
    }
           
  }, [player]);

  const avatarTop = {
    width:sizeCircle,
    height:sizeCircle,
    backgroundColor:theme.palette.background.default,
color:theme.palette.text.primary,
    //textAlign:"center",
    //border:"5px solid green",
    borderWidth: "5px",
    borderStyle:"solid",
    //fontWeight:"bold",
  };

  const avatarBottom = {
    width:sizeCircle,
    height:sizeCircle,
    //backgroundColor:theme.palette.background.default,
    color:theme.palette.text.secondary,
    //textAlign:"center",
    //border:"5px solid green",
    //borderWidth: "5px",
    //borderStyle:"solid",
    //fontWeight:"bold",
  };

  return(
  <Card className="twitterWidget" elevation={5} sx={{ borderRadius: 5, padding:{xs:1, sm:2, md:2}} } >
      <Grid container columns={ {xs:12, sm:12, md:12}}>

            <Grid item xs={12} sm={12} md={12} container justifyContent={"center"}
            //border="1px solid red"
            >
                <Typography fontSize={{xs:16, md:30}} fontWeight={"bold"}>HISTORY</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} container justifyContent={"center"} direction="row" mt={{xs:3, sm:3, md:5}}
            //border="1px solid green"
            >
              <Grid item xs={6} sm={6} md={6} container direction={"row"} justifyContent={"center"} alignItems={"flex-start"}
              //border="1px solid blue"
              >
                <Avatar
                          //className={classes.styleAvatarWins}
                          sx={avatarTop}
                          style={{borderColor: theme.palette.green.main}}
                      >
                      <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography fontWeight={"bold"} gutterBottom>
                          Wins
                      </Typography>
                      <Typography fontWeight={"bold"} gutterBottom>
                          {wins}
                      </Typography>
                      </Stack>
                  </Avatar>
              </Grid>
              <Grid item xs={6} sm={6} md={6} container justifyContent={"center"}>
                <Avatar
                      sx={avatarTop}
                      style={{borderColor: theme.palette.red.main}}
                          //className={classes.styleAvatarLooses}
                          //style={{backgroundColor:theme.backgroundColor, color:theme.color,margin:10}}
                      >
                      <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography fontWeight={"bold"} gutterBottom>
                          Looses
                      </Typography>
                      <Typography fontWeight={"bold"} gutterBottom>
                          {looses}
                      </Typography>
                      </Stack>
                  </Avatar>
              </Grid>
            </Grid>


            <Grid item xs={12} sm={12} md={12} container justifyContent={"center"} direction="row" mt={2}
            //border="1px solid green"
            >
              <Grid item xs={6} sm={6} md={6} container direction={"row"} justifyContent={"center"} alignItems={"flex-start"}
              //border="1px solid blue"
              >
                <Avatar
                          //className={classes.styleAvatarWins}
                          sx={avatarBottom}
                          style={{backgroundColor:theme.palette.blue.main}}
                      >
                      <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography fontWeight={"bold"} gutterBottom>
                          Total flips
                      </Typography>
                      <Typography fontWeight={"bold"} gutterBottom>
                          {wins + looses}
                      </Typography>
                      </Stack>
                  </Avatar>
              </Grid>
              <Grid item xs={6} sm={6} md={6} container justifyContent={"center"}>
                <Avatar
                      sx={avatarBottom}
                      style={{backgroundColor:theme.palette.orange.main}}
                          //className={classes.styleAvatarLooses}
                          //style={{backgroundColor:theme.backgroundColor, color:theme.color,margin:10}}
                      >
                        <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography fontWeight={"bold"} gutterBottom>
                          Wins rate
                      </Typography>
                      <Typography fontWeight={"bold"} gutterBottom>
                          {(wins + looses) > 0 ? (wins * 100) / (wins + looses) : 0} %
                      </Typography>
                      </Stack>
                  </Avatar>
              </Grid>
            </Grid>

            



      </Grid>


            {
              /*
              <Container style={{display:'inline-flex', }}>
            <div style={{margin:'0 auto', display:'inline-flex'}}>
                <Avatar
                        className={classes.styleAvatarWins}
                        style={{backgroundColor:theme.backgroundColor, color:theme.color,margin:10}}
                    >
                    <Typography className={classes.bold} gutterBottom>
                        Wins<br/>{wins}
                    </Typography>
                </Avatar>

                <Avatar className={classes.styleAvatarLooses} style={{backgroundColor:theme.backgroundColor, color:theme.color,margin:10}}>
                <Typography className={classes.bold} gutterBottom>
                Looses<br/>{looses}
                </Typography>
                </Avatar>
                </div>
            </Container>
            <Container style={{display:'inline-flex', }}>
                <div style={{margin:'0 auto', display:'inline-flex'}}>
                    <Avatar className={classes.styleAvatarTotalBet} style={{backgroundColor:theme.palette.orange.main,margin:10}}
                        ><Typography className={classes.bold} gutterBottom>
                        Total bets<br/>{wins + looses}
                        </Typography></Avatar>
                        <Avatar className={classes.styleAvatarWinsRate}
                        style={{backgroundColor:theme.palette.blue.main,margin:10}}
                        >
                        <Typography className={classes.bold} gutterBottom>
                        Wins rate<br/>{(wins + looses) > 0 ? (wins * 100) / (wins + looses) : 0}%
                        </Typography>
                    </Avatar>
                </div>
            </Container>
            */
            }
  </Card>);
}
