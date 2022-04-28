import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Layout from "./Layouts/Layout";
import Home from "./Layouts/Pages/Home"
import Contact from "./Layouts/Pages/Contact";
import NoPage from "./Layouts/Pages/NoPage";
import Login from "./Layouts/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
