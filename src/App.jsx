import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ResumePage from "./pages/Resumes/ResumePage";
import ResumeFormPage from "./pages/ResumeFormPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="/resume/:id" element={<ResumeFormPage />} />
      </Routes>
    </>
  );
}

export default App;
