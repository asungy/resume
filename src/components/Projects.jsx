import "../styles/projects.css";
import heartEmoji from "../assets/heart_emoji.png";

function SectionHeader() {
  return (
    <div className="section-header">
      <span>
        <img
          src={heartEmoji}
          alt="heart emoji"
        />
        <span>&nbsp;</span>
        <span>Projects</span>
      </span>
      <hr/>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects">
      <SectionHeader />
    </div>
  );
}

export default Projects;
