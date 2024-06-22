import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Paper, Typography } from '@mui/material';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the trash' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  columnOrder: ['column-1'],
};

const Kanban = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    const column = state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

        return (
          <Box key={column.id} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6">{column.title}</Typography>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <Paper ref={provided.innerRef} {...provided.droppableProps} style={{ padding: '16px', width: '250px' }}>
                  {tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Paper
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ ...provided.draggableProps.style, marginBottom: '8px', padding: '8px' }}
                        >
                          {task.content}
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Paper>
              )}
            </Droppable>
          </Box>
        );
      })}
    </DragDropContext>
  );
}

export default Kanban;
