import React, { useEffect, useState } from 'react'
import { Box, makeStyles, Typography , Button } from "@material-ui/core"
import logo from '../images/bg.jpg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MinimizeIcon from '@material-ui/icons/Minimize';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({

    component: {
        height: '500px',
        display: 'flex',
        alignItems: "center",
        width: '94%',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        backgroundColor: "fd9663",
        
    },

    leftContainer: {
        backgroundImage: `url(${logo})`,
        height: '100%',
        width: '40%',
        backgroundSize: "cover",
        borderRadius: '20px 0 0 20px'
    },

    rightContainer: {
        height: '100%',
        width: '60%',
        background: 'linear-gradient(to right,#e74c3c,#e67e22)',
        borderRadius: '0 20px 20px 0'
    },

    Component: {
        margin: '30px 60px'
    },
    container: {
        display: 'flex',
    },
    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2,
        marginLeft : 70

    },
    value: {
        color: '#fff'
    },
    icon: {
        color: 'darkred',
        marginRight: 15
    },
    error: {
        background: 'red',
        color: '#fff',
        margin: 50,
        padding: 20
    },

    information: {

        marginTop : 20,
        fontWeight : "bold"

    },

    button : {
        marginLeft : 170
    }
})



function Weather({ props }) {

    const classes = useStyles()
    console.log("Hello world")
    console.log(props)

    return (
        <>
            <Box className={classes.component} >
                <Box className={classes.leftContainer} >

                </Box>
                <Box className={classes.rightContainer} >

                    <div  className = {classes.information}>
                    <Typography className={classes.row}><LocationOnIcon className={classes.icon} />Location:  <Box className={classes.value} component="span">{props.name} {props.country} </Box></Typography>
                    <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon} />Temperature:  <Box className={classes.value} component="span">{(props.temp - 273.00).toFixed(2)}°C </Box></Typography> 
                    <Typography className={classes.row}><OpacityIcon className={classes.icon} />Humidity:  <Box className={classes.value} component="span">{props.humidity}% </Box></Typography>
                    <Typography className={classes.row}><Brightness5Icon className={classes.icon} />Sun Rise:  <Box className={classes.value} component="span">{new Date(props.sunrise * 1000).toLocaleTimeString()} </Box></Typography>
                    <Typography className={classes.row}><Brightness6Icon className={classes.icon} />Sun Set: <Box className={classes.value} component="span">{new Date(props.sunset * 1000).toLocaleTimeString()} </Box></Typography>
                    <Typography className={classes.row}><DehazeIcon className={classes.icon} />Condition:  <Box className={classes.value} component="span">{props.condition} </Box></Typography>
                    <Typography className={classes.row}><AddIcon className={classes.icon} />Max Temperature:  <Box className={classes.value} component="span">{(props.temp_max - 273.00).toFixed(2)}°C </Box></Typography>
                    <Typography className={classes.row}><MinimizeIcon className={classes.icon} />Min Temperature:  <Box className={classes.value} component="span">{(props.temp_min - 273.00).toFixed(2)}°C </Box></Typography>
                    </div>

                </Box>
            </Box>
        </>
    )
}

export default Weather
