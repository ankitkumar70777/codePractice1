import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Contact from "./modules/contact/contact";

function App() {
  return (
    <main>
      <Routes>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </main>
  );
}

export default App;
