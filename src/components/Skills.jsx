import "../styles/skills.css";
import bicepEmoji from "../assets/bicep_emoji.png";

function SectionHeader() {
  return (
    <div className="section-header">
      <span>
        <img
          src={bicepEmoji}
          alt="bicep emoji"
        />
        <span>&nbsp;</span>
        <span>Skills</span>
      </span>
      <hr/>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <SectionHeader />
    </div>
  );
}

export default Skills;
