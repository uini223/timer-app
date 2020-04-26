import React from 'react';
import { Form } from './Form/Form.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopBar } from './topbar/topbar';
import { Home } from './home/home.component';

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
    { label: 'Home', path: '/', icon: 'pi pi-fw pi-home', component: <Form /> },
    {
        label: 'Tasks',
        path: '/tasks',
        icon: 'pi pi-fw pi-calendar',
        component: <Home />,
    },
    // { label: 'History', path: '/history', icon: 'pi pi-fw pi-pencil' },
];
