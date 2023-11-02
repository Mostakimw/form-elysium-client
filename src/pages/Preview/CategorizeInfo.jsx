import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CategorizeInfo = () => {
  const [categorizeData, setCategorizeData] = useState([
    {
      id: "1",
      category: "Mostakim",
      answer: "Riya",
    },
    {
      id: "2",
      category: "Hasan",
      answer: "Makhon",
    },
    {
      id: "3",
      category: "Math",
      answer: "English",
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      // Item was dropped outside of a valid drop target
      return;
    }

    // Find the source and destination items
    const sourceItem = categorizeData.find(
      (item) => item.id === result.draggableId
    );
    const destinationItem = categorizeData.find(
      (item) => item.id === result.destination.droppableId
    );

    // Move the answer to the specific question
    if (sourceItem && destinationItem) {
      destinationItem.answer = sourceItem.answer;
      sourceItem.answer = ""; // Clear the answer from the source
      setCategorizeData([...categorizeData]); // Update the state
    }
  };

  return (
    <div>
      {/* Categorize Section */}
      <div>
        <label>Categorize:</label>
      </div>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="categorize" direction="horizontal">
            {(provided) => (
              <div ref={provided.innerRef}>
                {categorizeData.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {/* Display the question and answer */}
                        <div>
                          {item.category} - {item.answer}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default CategorizeInfo;
