import React from 'react';
import { AddButton } from './addButton.component';
import styled from 'styled-components';
import { darken } from '@material-ui/core/styles';
import { Theme } from '../../../common/theme.component';

export const StyledAddButton = styled(AddButton)`
    position: absolute;
    bottom: ${Theme.spacing(1) * 0.25}rem;
    right: ${Theme.spacing(1) * 0.25}rem;
`;
