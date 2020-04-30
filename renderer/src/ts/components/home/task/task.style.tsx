import styled from 'styled-components';
import { Task } from './task.component';
import { Theme } from '../../../common/theme.component';

export const StyledTask = styled(Task)`
    :hover {
        background-color: ${Theme.palette.action.hover};
    }
`;
