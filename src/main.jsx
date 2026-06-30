import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/outfit";
import "@fontsource/outfit/700.css";
import "./index.css";
import App from "./App.jsx";
import { PersonalInfoProvider } from "./context/personalInfoStore.jsx";
import { ProfessionalSummaryProvider } from "./context/professionalSummaryStore.jsx";
import { ProfessionalExpProvider } from "./context/professionalExpStore.jsx";
import { EducationProvider } from "./context/educationStore.jsx";
import { ProjectProvider } from "./context/projectStore.jsx";
import { SkillProvider } from "./context/skillStore.jsx";
import { ResumesProvider } from "./context/ResumeStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalInfoProvider>
      <ProfessionalSummaryProvider>
        <ProfessionalExpProvider>
          <ProjectProvider>
            <EducationProvider>
              <SkillProvider>
                <ResumesProvider>
                  <App />
                </ResumesProvider>
              </SkillProvider>
            </EducationProvider>
          </ProjectProvider>
        </ProfessionalExpProvider>
      </ProfessionalSummaryProvider>
    </PersonalInfoProvider>
  </StrictMode>,
);
