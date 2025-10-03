import "./App.css";
import Preview from "./components/preview.jsx";
import ImageBgRemover from "./components/ImageBgRemover.jsx";

function App() {
  return (
    <>
      <div className="mx-32 my-16 flex flex-col items-center gap-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-black">
              Remove Background of your Image
            </h1>
            <Preview />
          </div>
          <div className="flex flex-col mt-32 items-center flex-end w-full h-full gap-4">
            <ImageBgRemover />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
