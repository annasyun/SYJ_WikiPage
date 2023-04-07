import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Wiki from "./pages/Wiki/Wiki";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/wiki" element={<Wiki />}></Route>
    </Routes>
  );
}

export default App;
