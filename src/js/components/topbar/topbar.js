import React, { useState, useEffect } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useHistory, useLocation } from 'react-router-dom';

const getItemByPath = (path) => {
    return menuItems.find((menuItem) => menuItem.path === path);
};

export const TopBar = (props) => {
    const history = useHistory();
    const [activeItem, setActiveItem] = useState(
        getItemByPath(history.location.pathname)
    );
    const location = useLocation();

    return (
        <TabMenu
            model={menuItems}
            activeItem={activeItem}
            onTabChange={({ value }) => {
                history.push(value.path);
                setActiveItem(value);
            }}
        />
    );
};

const menuItems = [
    { label: 'Home', path: '/', icon: 'pi pi-fw pi-home' },
    { label: 'Tasks', path: '/tasks', icon: 'pi pi-fw pi-calendar' },
    { label: 'History', path: '/history', icon: 'pi pi-fw pi-pencil' },
];
