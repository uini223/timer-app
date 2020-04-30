import {
    createStyles,
    Divider,
    List,
    makeStyles,
    Theme,
    Typography,
} from '@material-ui/core';
import { groupBy } from 'lodash';
import React from 'react';
import { StyledAddButton } from './addButton/addButton.style';
import { StyledTask } from './task/task.style';

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

    // const shouldRender

    return (
        <>
            {Object.entries(groupedTasks).map(([date, tasks], index) => {
                return (
                    <>
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
                                <StyledTask {...task} />
                            ))}
                        </List>
                        {Object.keys(groupedTasks).length === index - 1 && (
                            <StyledAddButton />
                        )}
                    </>
                );
            })}
            <StyledAddButton />
        </>
    );
};

const exampleTasks: any[] = Array.from(Array(30).keys()).map((elem: any) => {
    return {
        date: new Date(),
        name: 'task with very very long description hue hue hue hue hue hue',
    };
});
