import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const Form = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
};
