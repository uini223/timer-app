import React, { useState } from 'react';
import { groupBy } from 'lodash';
import { TaskGroupStyle } from './taskGroup/taskGroup.style';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import TimerIcon from '@material-ui/icons/Timer';
import AddIcon from '@material-ui/icons/Add';

import {
    List,
    Divider,
    Typography,
    ListItem,
    ListItemText,
    ListItemIcon,
    Fab,
    makeStyles,
    Theme,
    createStyles,
    ListItemSecondaryAction,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    })
);

export const Home = () => {
    const classes = useStyles();
    const groupedTasks = groupBy(exampleTasks, (task: any) =>
        task.date.toLocaleDateString()
    );
    const [isTimerOn, setIsTimerOn] = useState(false);

    return (
        <>
            {Object.entries(groupedTasks).map(([date, tasks]) => {
                return (
                    <List>
                        <Divider component="li" />
                        <li>
                            <Typography
                                color="textSecondary"
                                align="center"
                                display="block"
                                variant="caption"
                            >
                                {date}
                            </Typography>
                        </li>
                        {tasks.map((task) => (
                            <ListItem className="MuiTableRow-hover">
                                <ListItemIcon>
                                    <AssignmentIcon />
                                </ListItemIcon>
                                <ListItemText primary={task.name} />
                                <ListItemSecondaryAction>
                                    {!isTimerOn && (
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setIsTimerOn(true)}
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
                                            onClick={() => setIsTimerOn(false)}
                                            startIcon={<TimerOffIcon />}
                                        >
                                            Stop
                                        </Button>
                                    )}
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                );
            })}
            <Fab color="primary" size="medium" className={classes.fab}>
                <AddIcon />
            </Fab>
        </>
    );
};

const exampleTasks: any[] = [
    {
        date: new Date(),
        name: 'dzisiejszy task',
    },
    {
        date: new Date(),
        name: 'drugi dzisiejszy task',
    },
    {
        date: new Date('2019-08-01'),
        name: 'stary task',
    },
];
