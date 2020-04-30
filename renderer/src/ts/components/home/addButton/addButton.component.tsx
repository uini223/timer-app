import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

interface AddButtonProps {
    className?: string;
}
export const AddButton = (props: AddButtonProps) => (
    <Fab size="medium" className={props.className}>
        <AddIcon />
    </Fab>
);
