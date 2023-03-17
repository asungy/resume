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

const skills = {
  advanced: [
    "C++",
    "Python",
    "Rust",
  ],
  intermediate: [
    "Agile",
    "C",
    "CMake",
    "Deno",
    "Docker",
    "Git",
    "GitHub Actions",
    "JavaScript",
    "Jira",
    "Linux",
    "ReactJS",
    "TypeScript",
    "x86",
  ],
  familiar: [
    "AWS",
    "CSS3",
    "DirectX",
    "Go",
    "HTML5",
    "Java",
    "Kubernetes",
    "MongoDB",
    "Node",
    "OpenGL",
    "PostgreSQL",
    "WebAssembly",
    "WebGPU",
  ],
};

function stringify_list(list) {
  let result = list.reduce((acc, curr) => {
    return acc.concat(", ").concat(curr);
  });

  return result;
}

function AdvancedSection(props) {
  let skills = props.skills;
  return (
    <div className="skill-section">
      <span>
        <span className="level">Advanced</span>
        <span>:&nbsp;</span>
        {stringify_list(skills)}
      </span>
    </div>
  );
}

function IntermediateSection(props) {
  let skills = props.skills;
  return (
    <div className="skill-section">
      <span>
        <span className="level">Intermediate</span>
        <span>:&nbsp;</span>
        {stringify_list(skills)}
      </span>
    </div>
  );
}

function FamiliarSection(props) {
  let skills = props.skills;
  return (
    <div className="skill-section">
      <span>
        <span className="level">Familiar</span>
        <span>:&nbsp;</span>
        {stringify_list(skills)}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills">
      <SectionHeader />
      <AdvancedSection skills={skills.advanced} />
      <IntermediateSection skills={skills.intermediate} />
      <FamiliarSection skills={skills.familiar} />
    </div>
  );
}

export default Skills;
