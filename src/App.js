import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import WikiListItemPage from "./components/WikiListItemPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/wiki/:id" element={<WikiListItemPage />}></Route>
    </Routes>
  );
}

export default App;
