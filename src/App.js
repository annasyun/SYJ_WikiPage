import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import WikiItem from "./components/WikiItem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/wiki/:id" element={<WikiItem />}></Route>
      </Routes>
    </>
  );
}

export default App;
