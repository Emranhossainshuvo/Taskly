import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const tasksData = [
  { id: 'task1', title: 'Task 1', status: 'todo' },
  { id: 'task2', title: 'Task 2', status: 'todo' },
  { id: 'task3', title: 'Task 3', status: 'doing' },
  { id: 'task4', title: 'Task 4', status: 'doing' },
  { id: 'task5', title: 'Task 5', status: 'done' },
  { id: 'task6', title: 'Task 6', status: 'done' },
];

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-white p-4 mb-4 rounded-md shadow-md"
        >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

const TaskList = ({ tasks, status }) => {
  return (
    <div className="flex-1">
      <h2 className="text-lg font-bold mb-4">{status}</h2>
      <Droppable droppableId={status} key={status}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-gray-100 p-4 rounded-md"
          >
            {tasks
              .filter((task) => task.status === status)
              .map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

const TaskManagementDashboard = () => {
  const [tasks, setTasks] = useState(tasksData);

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="flex">
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList tasks={tasks} status="todo" />
        <TaskList tasks={tasks} status="doing" />
        <TaskList tasks={tasks} status="done" />
      </DragDropContext>
    </div>
  );
};

export default TaskManagementDashboard;
