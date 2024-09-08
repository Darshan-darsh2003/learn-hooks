import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { UseStateExample } from "./pages/UseStateExample";
import { UseEffectExample } from "./pages/UseEffectExample";
import { UseContextExample } from "./pages/UseContextExample";
import { UseRefExample } from "./pages/UseRefExample";
import { UseReducerExample } from "./pages/UseReducerExample";
import { UseMemoExample } from "./pages/UseMemoExample";
import { UseCallbackExample } from "./pages/UseCallbackExample";
import { UseImperativeHandleExample } from "./pages/UseImperativeHandleExample";
import { UseLayoutEffectExample } from "./pages/UseLayoutEffectExample";
import { UseDebugValueExample } from "./pages/UseDebugValueExample";
import "./App.css"; // For custom styles if needed

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/use-state" element={<UseStateExample />} />
            <Route path="/use-effect" element={<UseEffectExample />} />
            <Route path="/use-context" element={<UseContextExample />} />
            <Route path="/use-ref" element={<UseRefExample />} />
            <Route path="/use-reducer" element={<UseReducerExample />} />
            <Route path="/use-memo" element={<UseMemoExample />} />
            <Route path="/use-callback" element={<UseCallbackExample />} />
            <Route
              path="/use-imperative-handle"
              element={<UseImperativeHandleExample />}
            />
            <Route
              path="/use-layout-effect"
              element={<UseLayoutEffectExample />}
            />
            <Route path="/use-debug-value" element={<UseDebugValueExample />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Sidebar component for navigation
function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>React Hooks</h2>
      <ul>
        <li>
          <NavLink to="/use-state">useState</NavLink>
        </li>
        <li>
          <NavLink to="/use-effect">useEffect</NavLink>
        </li>
        <li>
          <NavLink to="/use-context">useContext</NavLink>
        </li>
        <li>
          <NavLink to="/use-ref">useRef</NavLink>
        </li>
        <li>
          <NavLink to="/use-reducer">useReducer</NavLink>
        </li>
        <li>
          <NavLink to="/use-memo">useMemo</NavLink>
        </li>
        <li>
          <NavLink to="/use-callback">useCallback</NavLink>
        </li>
        <li>
          <NavLink to="/use-imperative-handle">useImperativeHandle</NavLink>
        </li>
        <li>
          <NavLink to="/use-layout-effect">useLayoutEffect</NavLink>
        </li>
        <li>
          <NavLink to="/use-debug-value">useDebugValue</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default App;
