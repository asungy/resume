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

const entries = [
  {
    title: "Resume",
    link: "https://github.com/asungy/resume",
    description:
      <span>
        This resume you're reading right now is written in <b>ReactJS</b>!
        Originally, I wrote my resume using Word documents and I wanted to solve
        the frustration of not being able to conveniently modify and version
        control my resume.
      </span>,
  },
  {
    title: "Kodo",
    link: "https://github.com/asungy/kodo",
    description:
      <span>
        Currently working on developing a rendering engine in the browser using <b>Rust</b>.
      </span>,
  }
]

function Entry(props) {
  let entry = props.entry;
  return (
    <div className="project-entry">
      <div className="entry-header">
        <span className="title">{entry.title}</span>
        <a
          href={entry.link}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {entry.link}
        </a>
      </div>
      <div className="description-div">
        <span className="description">{entry.description}</span>
      </div>
    </div>
  );
}

function Entries(props) {
  let entries = props.entries;
  return (
    <div>
      {entries.map((entry) => <Entry key={entry.title} entry={entry} />)}
    </div>
  );
}

function Projects() {
  return (
    <div id="projects">
      <SectionHeader />
      <Entries entries={entries} />
    </div>
  );
}

export default Projects;
