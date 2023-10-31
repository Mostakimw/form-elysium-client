import { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Categorize = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryAnswer, setNewCategoryAnswer] = useState({
    category: "",
    answer: "",
  });
  console.log(categories);

  const handleCategoryAdd = () => {
    if (
      newCategoryAnswer.category.trim() !== "" &&
      newCategoryAnswer.answer.trim() !== ""
    ) {
      setCategories([...categories, newCategoryAnswer]);
      setNewCategoryAnswer({ category: "", answer: "" });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCategoryAdd(); // Call the handleCategoryAdd function when Enter key is pressed
    }
  };

  //   handle drag and drop

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // Return if the item was dropped outside of the list
    }

    const reorderedCategories = Array.from(categories);
    const [movedCategory] = reorderedCategories.splice(result.source.index, 1); // Remove the item from the source position
    reorderedCategories.splice(result.destination.index, 0, movedCategory); // Insert the item at the destination position

    // Update the state with the reordered list
    setCategories(reorderedCategories);
  };

  return (
    <div>
      <div>
        {/* showing all categories here  */}
        <h1 className="font-semibold text-2xl">Items</h1>
        {/* <ul className="mt-5 max-w-md">
          {categories.map((categoryAnswer, index) => (
            <li
              key={index}
              className="w-full flex items-center justify-between gap-4 border-2 p-2 rounded-md mb-3"
            >
              <BiCategoryAlt
                className="flex-shrink-0"
                style={{ fontSize: "30px" }}
              />
              <span className="font-semibold ">
                Category: {categoryAnswer.category}, Answer:{" "}
                {categoryAnswer.answer}
              </span>
              <RxCross1 className="flex-shrink-0 text-2xl text-red-500" />
            </li>
          ))}
        </ul> */}

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="mt-5 max-w-md h-fit"
              >
                {categories.map((categoryAnswer, index) => (
                  // Use Draggable for each list item
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="w-full flex items-center justify-between gap-4 border-2 p-2 rounded-md mb-3"
                      >
                        <BiCategoryAlt
                          className="flex-shrink-0"
                          style={{ fontSize: "30px" }}
                        />
                        <span className="font-semibold">
                          Category: {categoryAnswer.category}, Answer:{" "}
                          {categoryAnswer.answer}
                        </span>
                        <RxCross1 className="flex-shrink-0 text-2xl text-red-500" />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div>
        <h1 className="text-center bg-purple-700 py-1 px-4 rounded-md text-white text-xl font-semibold mt-10">
          Add Category With Answer
        </h1>
      </div>
      <div>
        <div>
          <input
            className="input input-bordered w-full max-w-xs mt-6"
            type="text"
            placeholder="category"
            value={newCategoryAnswer.category}
            onChange={(e) =>
              setNewCategoryAnswer({
                ...newCategoryAnswer,
                category: e.target.value,
              })
            }
            onKeyDown={handleKeyPress} // Handle Enter keypress
          />
          <input
            className="input input-bordered w-full max-w-xs mt-4"
            type="text"
            placeholder="ans"
            value={newCategoryAnswer.answer}
            onChange={(e) =>
              setNewCategoryAnswer({
                ...newCategoryAnswer,
                answer: e.target.value,
              })
            }
            onKeyDown={handleKeyPress} // Handle Enter keypress
          />
          <button
            onClick={handleCategoryAdd}
            className="px-4 py-1 border-2 border-purple-700 block mt-3 hover:cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categorize;