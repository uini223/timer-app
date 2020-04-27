import React, { useState, useEffect } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useHistory, useLocation } from 'react-router-dom';

interface TopBarProps {
    menuItems: any[];
}
export const TopBar = (props: TopBarProps) => {
    const getItemByPath = (path: string) => {
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
