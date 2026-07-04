import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ResumeForm from "./pages/ResumeForm";
import Resumes from "./pages/Resumes/Resumes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Resumes />} />
        <Route path="/resume/:id" element={<ResumeForm />} />
      </Routes>
    </>
  );
}

export default App;
