import ImageContainer from "./components/ImageContainer";
import Switcher from "./components/Switcher";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <div className="flex justify-end pr-12 pt-3">
        <Switcher />
      </div>
      <ImageContainer />
      <p className="text-center w-[400px] md:w-auto mx-auto">
        Nature and nature's laws lay hid in night, God said "Let Newton be" and
        all was light.
      </p>
    </div>
  );
};

export default App;
