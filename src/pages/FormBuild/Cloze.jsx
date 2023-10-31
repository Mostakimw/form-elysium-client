import { useState, useRef } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Cloze = ({ setClozeData }) => {
  const [text, setText] = useState("");
  const [previewText, setPreviewText] = useState(""); // State for the sanitized preview text
  const [options, setOptions] = useState([]); // Array to store options
  const quillRef = useRef();
  // Function to handle changes in the ReactQuill editor
  const handleChange = (value) => {
    setText(value);
    updatePreview(value); // Update the sanitized preview text when the editor content changes
  };

  // Function to add the selected text to the options array
  const handleMakeOption = () => {
    const quill = quillRef.current.getEditor();
    const selectedText = quill.getSelection(); // Get the currently selected text
    if (selectedText) {
      // Apply formatting to make the selected text underlined
      quill.formatText(
        selectedText.index,
        selectedText.length,
        "underline",
        true
      );
      const optionText = quill.getText(selectedText.index, selectedText.length);
      // check if any text selected
      if (optionText.length > 0) {
        setOptions([...options, optionText]); // Add the selected text to the 'options' array}

        quill.setSelection(null); // Clear the selection
      } else {
        alert("Please add text for the option.");
      }
      // Update the question data and pass it to the FormBuild component
      const updatedQuestion = {
        text: previewText,
        options: [...options, optionText],
      };
      setClozeData(updatedQuestion);
    }
    updatePreview(text); // Update the sanitized preview text
  };

  // Function to strip HTML tags from content
  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText;
  };

  // Function to update the sanitized preview text
  const updatePreview = (value) => {
    const sanitizedText = stripHtmlTags(value);
    setPreviewText(sanitizedText);
  };

  return (
    <>
      <div className="flex gap-16 px-16 mt-10">
        <div>
          <div className="mb-12">
            {/* preview question */}
            <h1 className="font-bold text-xl text-gray-800">
              Preview Question:
            </h1>
            <p className="text-[#757575] text-xl">{previewText}</p>
          </div>

          {/* question */}
          <div className="mt-5">
            <ReactQuill ref={quillRef} value={text} onChange={handleChange} />
            <button className="my-btn mt-5" onClick={handleMakeOption}>
              Make Option
            </button>
          </div>
        </div>

        {/* options */}
        <div>
          <h2 className="font-bold text-xl text-gray-800">Options:</h2>

          <ul className="mt-5">
            {options.map((option, index) => (
              <li
                key={index}
                className="w-full flex items-center justify-between gap-4 border-2 p-2 rounded-md mb-3"
              >
                {" "}
                <BiCategoryAlt
                  className="flex-shrink-0"
                  style={{ fontSize: "30px" }}
                />
                <span className="font-semibold">{option}</span>
                <RxCross1 className="flex-shrink-0 text-2xl text-red-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cloze;
