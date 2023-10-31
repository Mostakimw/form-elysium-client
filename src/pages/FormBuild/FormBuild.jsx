import { useState } from "react";
import Categorize from "./Categorize";

const FormBuild = () => {
  const [formName, setFormName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFormNameChange = (e) => {
    const newName = e.target.value;
    setFormName(newName);
  };

  const handleSelectedOption = (e) => {
    const selectedText = e.target.value;
    setSelectedOption(selectedText);
  };

  return (
    <div>
      <div>
        <h1 className="title mt-12">Build Your First Form</h1>
      </div>
      <div className="border-2 max-w-4xl py-16 px-10 mx-auto mt-12">
        {/* form name and preview and save */}
        <div className="flex gap-4 mb-10">
          <div>
            <input
              type="text"
              name="name"
              value={formName}
              onChange={handleFormNameChange}
              placeholder="Enter Form Name"
            />
          </div>
          <div>
            <button>Preview</button>
          </div>
          <div>
            <button>Save</button>
          </div>
        </div>
        {/* category select section */}
        <div className="flex flex-col items-center justify-center">
          <select
            className="select border-purple-700 focus-border-purple-500 max-w-xs"
            onChange={handleSelectedOption}
            value={selectedOption}
          >
            <option disabled value="">
              Select Your Question Type
            </option>
            <option value="categorize">Categorize</option>
            <option value="cloze">Cloze</option>
            <option value="comprehension">Comprehension</option>
          </select>
        </div>

        {/* Rendering Questions types here */}
        <div className="mt-5 flex flex-col items-center justify-center">
          {selectedOption === "categorize" && <Categorize />}
        </div>
      </div>
    </div>
  );
};

export default FormBuild;
