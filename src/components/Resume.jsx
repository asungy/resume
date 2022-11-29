import "../styles/resume.css";
import Employment from "./Employment";
import Header from "./Header";

function Resume() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Employment />
      </div>
    </div>
  );
}

export default Resume;
