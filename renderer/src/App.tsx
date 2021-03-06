import React from 'react';
import { Form } from './ts/components/Form/Form.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopBar } from './ts/components/topbar/topbar';
import { Home } from './ts/components/home/home.component';
import { CssBaseline, Container } from '@material-ui/core';

const getRoutes = () => {
    return [...menuItems].reverse().map((menuItem) => {
        return (
            <Route key={menuItem.label} path={menuItem.path}>
                {menuItem.component}
            </Route>
        );
    });
};

export const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Container maxWidth="md">
                <TopBar menuItems={menuItems} />
                <Switch>{getRoutes()}</Switch>
            </Container>
        </BrowserRouter>
    );
};

const menuItems = [
    { label: 'Home', path: '/', icon: 'pi pi-fw pi-home', component: <Home /> },
    {
        label: 'Tasks',
        path: '/tasks',
        icon: 'pi pi-fw pi-calendar',
        component: <Form />,
    },
    {
        label: 'History',
        path: '/history',
        icon: 'pi pi-fw pi-pencil',
        component: <Home />,
    },
];
