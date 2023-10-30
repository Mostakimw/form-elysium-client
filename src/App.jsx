import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet />
      </div>
    </>
  );
}

export default App;
