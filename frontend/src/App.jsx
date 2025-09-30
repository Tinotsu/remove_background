import "./App.css";
import Input from "./components/input.jsx";

function App() {
  return (
    <>
      <div className="mx-32 my-16 flex flex-col items-center gap-4">
        <h1 className="text-6xl">Remove Background of your Image</h1>
        <div className="">
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
