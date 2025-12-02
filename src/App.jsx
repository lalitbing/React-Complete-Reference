import AxiosCocktails from "./AxiosFetchingData/AxiosCocktails.jsx";
import AxiosDadJoke from "./AxiosFetchingData/AxiosDadJoke.jsx";
import AxiosProducts from "./AxiosFetchingData/AxiosProducts.jsx";
import AxiosRandomUsers from "./AxiosFetchingData/AxiosRandomUsers.jsx";
import CustomHooks from "./CustomHooks/CustomHooks";
import UseReducerExample from "./Examples/UseReducerExample.jsx";
import Hooks3UseContext from "./Hooks/useContext/Hooks3.jsx";
import HooksUseEffect from "./Hooks/useEffect,useState/Hooks1.jsx";
import Hooks4Memo from "./Hooks/useMemo/Hooks4.jsx";
import HooksUseReduceCounter from "./Hooks/useReduce/Hooks2Counter.jsx";
import HooksUseReduceToDO from "./Hooks/useReduce/Todo App/Hooks2ToDo.jsx";
import Hooks5useRef from "./Hooks/useRef/Hooks5.jsx";
import Task1Todo from "./Tasks/Task1.jsx";
import Task2Temperature from "./Tasks/Task2Temp.jsx";
import JSBasics from "./_JSBasics/JSBasics.jsx";

function App() {
  return (
    <div>
      <HooksUseEffect />
      <HooksUseReduceCounter />
      <HooksUseReduceToDO />
      <Hooks3UseContext />
      <Hooks4Memo />
      <Hooks5useRef />
      <CustomHooks />
      <AxiosRandomUsers />
      <AxiosDadJoke />
      <AxiosProducts />
      <Task1Todo />
      <Task2Temperature />
      <JSBasics />
      <AxiosCocktails />
      <UseReducerExample/>
    </div>
  );
}

export default App;
