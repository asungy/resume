import "../styles/skills.css";

function SectionHeader() {
  return (
    <div className="section-header">
      <span><span style={{fontSize: "100%"}}>💪</span> Skills</span>
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
