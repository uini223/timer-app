import React from 'react';

interface TaskGroupProps {
    className?: string;
    title: string;
    tasks: any[];
}
export const TaskGroup = (props: TaskGroupProps) => {
    return (
        <div className={props.className}>
            <h1>{props.title}</h1>
            <div className="tasks-container">
                {props.tasks.map((task) => (
                    <div className="task" key={task.name}>
                        {task.name}
                    </div>
                ))}
            </div>
        </div>
    );
};
