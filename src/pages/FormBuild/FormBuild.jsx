import { useState } from "react";

const FormBuild = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectedOption = (e) => {
    const selectedText = e.target.value;
    setSelectedOption(selectedText);
  };
  return (
    <>
      <div>
        <div>
          <h1 className="title mt-12">Build Your First Form</h1>
        </div>
        <div className="border-2 max-w-4xl py-16 px-10 mx-auto mt-12">
          {/* category select section  */}
          <div className="flex flex-col items-center justify-center">
            <select
              className="select border-purple-700 focus:border-purple-500 max-w-xs"
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

          {/* category section  */}
          <div className="mt-12 flex flex-col items-center justify-center">
            {/* categorize  */}
            {selectedOption === "categorize" && <div>categorize</div>}
            {/* cloze  */}
            {selectedOption === "cloze" && <div>cloze</div>}
            {/* comprehension  */}
            {selectedOption === "comprehension" && <div>comprehension</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBuild;
