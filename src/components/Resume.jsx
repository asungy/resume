import "../styles/resume.css";
import Education from "./Education";
import Employment from "./Employment";
import Header from "./Header";
import Skills from "./Skills";

function Resume() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Employment />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default Resume;
