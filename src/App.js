import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RickMorty from "./pages/Rick&Morty";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import Stars from "./pages/Stars";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rick&morty" element={<RickMorty />} />
            <Route path="team" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}