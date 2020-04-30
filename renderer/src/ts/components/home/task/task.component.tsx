import React, { useState, useEffect } from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Button,
    Grid,
    Typography,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import TimerIcon from '@material-ui/icons/Timer';
import moment from 'moment';

interface TaskProps {
    className?: string;
    name: string;
    date: string;
}
export const Task = (props: TaskProps) => {
    const [isTimerOn, setIsTimerOn] = useState(false);
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(-1);
    useEffect(() => {
        return () => {
            clearInterval(timer);
        };
    }, []);
    const startTimer = () => {
        const interval = setInterval(
            () => setTime((prevTime) => prevTime + 60),
            1000
        );
        setTimer(interval);
    };

    const stopTimer = () => {
        clearInterval(timer);
        setTimer(-1);
    };

    const handleOnStartClick = () => {
        startTimer();
        setIsTimerOn(true);
    };

    const handleOnStopClick = () => {
        stopTimer();
        setIsTimerOn(false);
    };

    const getTime = () => {
        return moment
            .utc(moment.duration(time, 'seconds').asMilliseconds())
            .format('HH:mm:ss');
    };

    const renderButton = () => {
        return (
            <>
                {!isTimerOn && (
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleOnStartClick}
                        startIcon={<TimerIcon />}
                    >
                        Start
                    </Button>
                )}
                {isTimerOn && (
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={handleOnStopClick}
                        startIcon={<TimerOffIcon />}
                    >
                        Stop
                    </Button>
                )}
            </>
        );
    };

    return (
        <Grid container spacing={1} className={props.className}>
            <Grid item xs={2}>
                <AssignmentIcon />
            </Grid>
            <Grid item xs={6}>
                <Typography>{props.name}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography color="textSecondary" align="center">
                    {getTime()}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                {renderButton()}
            </Grid>
        </Grid>
    );

    // return (
    //     <ListItem className={props.className}>
    //         <ListItemIcon>
    //             <AssignmentIcon />
    //         </ListItemIcon>
    //         <ListItemText primary={props.name} />
    //         {/* <ListItemText secondary={getTime()} /> */}
    //         <ListItemSecondaryAction>
    // {!isTimerOn && (
    //     <Button
    //         size="small"
    //         variant="contained"
    //         color="primary"
    //         onClick={handleOnStartClick}
    //         startIcon={<TimerIcon />}
    //     >
    //         {getTime()} Start
    //     </Button>
    // )}
    // {isTimerOn && (
    //     <Button
    //         size="small"
    //         variant="contained"
    //         color="secondary"
    //         onClick={handleOnStopClick}
    //         startIcon={<TimerOffIcon />}
    //     >
    //         {getTime()} Stop
    //     </Button>
    // )}
    //         </ListItemSecondaryAction>
    //     </ListItem>
    // );
};
