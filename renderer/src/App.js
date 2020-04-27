import React from 'react';
import { Form } from './js/components/Form/Form.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopBar } from './js/components/topbar/topbar';
import { Home } from './js/components/home/home.component';

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
            <TopBar menuItems={menuItems} />
            <Switch>{getRoutes()}</Switch>
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
    {
        label: 'Dupa',
        path: '/history',
        icon: 'pi pi-fw pi-pencil',
        component: <Home />,
    }
];
