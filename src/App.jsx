import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./core/core.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./page/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
