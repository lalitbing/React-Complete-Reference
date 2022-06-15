import CustomHooks from './CustomHooks/CustomHooks';
import Hooks3UseContext from './Hooks/useContext/Hooks3';
import HooksUseEffect from './Hooks/useEffect,useState/Hooks1';
import Hooks4Memo from './Hooks/useMemo/Hooks4';
import HooksUseReduceCounter from './Hooks/useReduce/Hooks2Counter';
import HooksUseReduceToDO from './Hooks/useReduce/Todo App/Hooks2ToDo';
import Hooks5useRef from './Hooks/useRef/Hooks5';

function App() {
  return (
    <div>
      {/* <HooksUseEffect /> */}
      {/* <HooksUseReduceCounter /> */}
      {/* <HooksUseReduceToDO /> */}
      {/* <Hooks3UseContext /> */}
      {/* <Hooks4Memo /> */}
      {/* <Hooks5useRef /> */}
      <CustomHooks />
    </div>
  );
}

export default App;
