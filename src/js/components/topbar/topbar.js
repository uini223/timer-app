import React, { useState, useEffect } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useHistory, useLocation } from 'react-router-dom';

export const TopBar = (props) => {
    const getItemByPath = (path) => {
        return props.menuItems?.find((menuItem) => menuItem.path === path);
    };
    const history = useHistory();
    const [activeItem, setActiveItem] = useState(
        getItemByPath(history.location.pathname)
    );

    return (
        <TabMenu
            model={props.menuItems}
            activeItem={activeItem}
            onTabChange={({ value }) => {
                history.push(value.path);
                setActiveItem(value);
            }}
        />
    );
};
