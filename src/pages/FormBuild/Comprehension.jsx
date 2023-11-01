import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Comprehension = ({ setComprehensionData }) => {
  const [passage, setPassage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    options: ["", "", ""],
  });
  const [newQuestionAdd, setNewQuestionAdd] = useState(false);

  // Handle the "Add Questions" button
  const handleNewQuestionAdd = () => {
    setNewQuestionAdd(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); //

    // Add your logic to save the new question
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ question: "", options: ["", "", ""] });
    setNewQuestionAdd(false);
  };

  // Handle changes in the new question's text and options
  const handleNewQuestionChange = (event) => {
    const { name, value } = event.target;
    const newQuestionData = {
      ...newQuestion,
      [name]: value,
    };
    setNewQuestion(newQuestionData);
  };

  // option handle
  const handleNewOptionChange = (index, value) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = value;

    setNewQuestion({
      ...newQuestion,
      options: updatedOptions,
    });
  };

  // Use useEffect to watch for changes in comprehensionData
  useEffect(() => {
    // Create the comprehensionData object inside the useEffect
    const comprehensionData = {
      passage: passage,
      questions: questions.map((q) => ({
        question: q.question,
        options: q.options,
      })),
    };
    if (comprehensionData.length > 0) {
      setComprehensionData(comprehensionData);
    } else {
      toast.error("add comprehension data first");
    }
  }, [passage, questions, setComprehensionData]);

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-10 grid grid-cols-2 gap-14">
            {/* passage  */}
            <div>
              <h1 className="text-xl font-bold mb-5 text-gray-800">Passage</h1>
              <textarea
                placeholder="Type Passage here"
                value={passage}
                onChange={(e) => setPassage(e.target.value)}
                className="textarea textarea-bordered textarea-lg w-full rounded-sm h-96"
                required
              ></textarea>
            </div>
            <div>
              {/* questions and options shown here  */}
              <div className="border-2 border-purple-300 p-2 rounded-sm mt-12 shadow-sm">
                <h1 className="text-xl font-bold mb-5 text-gray-800">
                  Questions
                </h1>
                <div>
                  {questions.map((q, qIndex) => (
                    <div key={qIndex}>
                      <p className="text-xl font-semibold mb-3">{q.question}</p>
                      <ul>
                        {q.options.map((option, oIndex) => (
                          <li
                            key={oIndex}
                            className="flex flex-col justify-center"
                          >
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name={`question-${qIndex}`}
                                value={option}
                              />
                              <span className="ml-2 mb-2">{option}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {newQuestionAdd && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter the question"
                      name="question"
                      value={newQuestion.question}
                      onChange={handleNewQuestionChange}
                      className="input input-bordered mb-3"
                      required
                    />
                    <div>
                      {newQuestion.options.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          placeholder={`Option ${index + 1}`}
                          value={option}
                          onChange={(e) =>
                            handleNewOptionChange(index, e.target.value)
                          }
                          className="input input-bordered mb-2"
                          required
                        />
                      ))}
                    </div>
                    <button
                      className="my-btn my-3"
                      type="submit"
                      onClick={handleNewOptionChange}
                    >
                      Save Question
                    </button>
                  </div>
                )}
              </div>

              <button
                className="my-btn mt-3"
                onClick={handleNewQuestionAdd}
                type="button"
              >
                Add Questions
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comprehension;
