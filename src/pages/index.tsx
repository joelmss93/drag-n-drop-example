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

    // eslint-disable-next-line no-useless-return
    if (!destination) return;

    const items = Array.from(todo);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setTodo(items);
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
                  {(provided, snapshot) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                    >
                      <p>{item.name}</p>
                    </Card>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* <Card>
        <p>Card 1</p>
      </Card> */}
    </Container>
  );
};

export default DragNDrop;
