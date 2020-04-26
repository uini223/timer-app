import React from 'react';
import { Form } from './Form/Form.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopBar } from './topbar/topbar';

export const App = () => {
    return (
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route path="/history">
                    <h2>history</h2>
                </Route>
                <Route path="/tasks">
                    <h2>tasks</h2>
                </Route>
                <Route path="/">
                    <Form />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
