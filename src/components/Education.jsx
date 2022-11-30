import "../styles/education.css";

function SectionHeader() {
  return (
    <div className="section-header">
      <span><span style={{fontSize: "100%"}}>🎓</span> Education</span>
      <hr/>
    </div>
  );
}

const virginaTechEntry = {
  school: "Virginia Tech",
  degree: "Bachelor\'s of Science",
  domain: "Computer Science",
  location: "Blacksburg, VA",
  start_year: "2013",
  end_year: "2018",
};

function Entry(props) {
  let entry = props.entry;
  return (
    <div className="entry">
      <div className="left-section">
        <span className="degree">{entry.degree}</span>
        <span className="domain">{entry.domain}</span>
      </div>

      <span className="school">{entry.school}</span>

      <div className="right-section">
        <span className="year">{entry.start_year} - {entry.end_year}</span>
        <span className="location">{entry.location}</span>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div id="education">
      <SectionHeader />
      <Entry entry={virginaTechEntry} />
    </div>
  );
}

export default Education;
