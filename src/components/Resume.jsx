import "../styles/resume.css";
import Education from "./Education";
import Employment from "./Employment";
import Header from "./Header";

function Resume() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Employment />
        <Education />
      </div>
    </div>
  );
}

export default Resume;
