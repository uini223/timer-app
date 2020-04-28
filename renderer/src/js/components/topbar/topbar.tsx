import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

interface TopBarProps {
    menuItems: any[];
}
export const TopBar = (props: TopBarProps) => {
    const getValueByPath = (path: string) => {
        return props.menuItems?.findIndex((menuItem) => menuItem.path === path);
    };

    const history = useHistory();
    const [value, setValue] = useState(
        getValueByPath(history.location.pathname)
    );

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        history.push(props.menuItems[newValue].path);
        setValue(newValue);
    };

    const renderTabs = () => {
        return props.menuItems.map((menuItem) => (
            <Tab key={menuItem.label} label={menuItem.label} />
        ));
    };

    return (
        <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                {renderTabs()}
            </Tabs>
        </AppBar>
    );
};
