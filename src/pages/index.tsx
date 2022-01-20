import React, { useState } from 'react';

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { Card, Container } from './styles';
import { itemsList } from './items';

const DragNDrop: React.FC = () => {
  const [todo, setTodo] = useState(itemsList);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (destination) {
      const items = Array.from(todo);
      const [newOrder] = items.splice(source.index, 1);
      items.splice(destination.index, 0, newOrder);

      setTodo(items);
    }
  };

  return (
    <Container>
      <h1>Drag and drop the cards to order!</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="todo"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todo.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, { isDragging }) => (
                    <Card
                      ref={provided.innerRef}
                      isDragging={isDragging}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p>{item.name}</p>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default DragNDrop;
