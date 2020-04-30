import { TaskGroup } from './taskGroup.component';
import styled from 'styled-components';

export const TaskGroupStyle = styled(TaskGroup)`
    h1 {
        font-size: 1rem;
        background-color: LightSkyBlue;
        padding: 0.25rem;
        text-align: center;
        border: 1px solid SteelBlue;
        border-radius: 0.25rem;
        // border-bottom: solid 2px SteelBlue;
        // box-shadow: 0 0.125rem 0.25rem SteelBlue;
        // border-style: solid;
        // border-width: 0.25px;
        // border-color: SteelBlue;
    }
    .tasks-container {
        padding: 0rem 2rem 0.5rem 2rem;
    }
    .task {
        text-align: center;
        background-color: LightGreen;
        margin-top: 0.5rem;
        padding: 0.25rem;
        border-style: solid;
        border-color: LimeGreen;
        border-width: 0px 2px;
        box-shadow: 0 0.125rem 0.25rem LimeGreen;
    }
`;
