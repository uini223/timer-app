import React from 'react';
import { groupBy } from 'lodash';
import { TaskGroupStyle } from './taskGroup/taskGroup.style';

export const Home = () => {
    const a = '';
    const groupedTasks = groupBy(exampleTasks, (task: any) =>
        task.date.toLocaleDateString()
    );

    return (
        <>
            {Object.entries(groupedTasks).map(([date, tasks]) => {
                return <TaskGroupStyle title={date} tasks={tasks} />;
            })}
        </>
    );
};

const exampleTasks: any[] = [
    {
        date: new Date(),
        name: 'dzisiejszy task',
    },
    {
        date: new Date(),
        name: 'drugi dzisiejszy task',
    },
    {
        date: new Date('2019-08-01'),
        name: 'stary task',
    },
];
