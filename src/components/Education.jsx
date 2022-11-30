import "../styles/education.css";

function SectionHeader() {
  return (
    <div className="section-header">
      <span><span style={{fontSize: "100%"}}>🎓</span> Education</span>
      <hr/>
    </div>
  );
}

function Education() {
  return (
    <div id="education">
      <SectionHeader />
    </div>
  );
}

export default Education;
