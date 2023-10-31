import { useState } from "react";
import { Link } from "react-router-dom";
import Categorize from "./Categorize";
import Cloze from "./Cloze";
import Comprehension from "./Comprehension";
import { MdPreview } from "react-icons/md";

const FormBuild = () => {
  const [formName, setFormName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [categorizeData, setCategorizeData] = useState({});
  const [clozeData, setClozeData] = useState({});
  const [comprehensionData, setComprehensionData] = useState([]);

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
        <div className="flex items-center gap-12 mb-10">
          {/* form name */}
          <div>
            <input
              type="text"
              name="name"
              value={formName}
              className="border px-3 py-2 rounded-md"
              onChange={handleFormNameChange}
              placeholder="Enter Form Name"
            />
          </div>
          {/* preview btn  */}
          <div>
            <Link>
              <button className="text-2xl" title="Preview">
                <MdPreview />
              </button>
            </Link>
          </div>
          {/* save btn  */}
          <div>
            <button className="my-btn">Save</button>
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
        <div className="flex flex-col items-center justify-center">
          {selectedOption === "categorize" && (
            <Categorize setCategorizeData={setCategorizeData} />
          )}
        </div>
        <div className="flex flex-col justify-center">
          {selectedOption === "cloze" && <Cloze setClozeData={setClozeData} />}
        </div>
        <div className="flex flex-col justify-center">
          {selectedOption === "comprehension" && (
            <Comprehension setComprehensionData={setComprehensionData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormBuild;
