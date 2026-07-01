import "./App.css";
import Header from "./components/Header/Header";
import ResumeForm from "./pages/ResumeForm";
import Resumes from "./pages/Resumes/Resumes";

function App() {
  return (
    <div>
      <Header />
      {/* <ResumeForm /> */}
      <Resumes/>
    </div>
  );
}

export default App;
