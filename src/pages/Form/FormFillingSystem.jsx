import { useEffect, useState } from "react";

const data = [
  { id: "q-1", text: "Answer 1" },
  { id: "q-2", text: "Answer 2" },
  // Add more answers as needed
];
function FormFillingSystem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto">
        <div className="column border p-10 w-full">
          {items.map((item) => (
            <div key={item.id}>{item.id}</div>
          ))}
        </div>
        <div className="column border p-10 w-full">
          {items.map((item) => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormFillingSystem;
