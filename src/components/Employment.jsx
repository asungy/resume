function SectionHeader() {
  return (
    <div className="section-header">
      <span>Employment</span>
      <hr/>
    </div>
  );
}

const entries = [
  {
    title: "Software Engineer",
    company: "Epistemix (start-up)",
    location: "Remote",
    start: "02/2022",
    end: "Current",
    points: [
      "TODO-1",
      "TODO-2",
      "TODO-3"
    ]
  }
];

function Entry(props) {
  let entry = props.entry;
  return (
    <div className="employment-entry">
      <div className="entry-header">
        <span className="title">{entry.title}</span>
        <span className="company">{entry.company}</span>
        <div className="entry-header-right">
          <span>{entry.start} - {entry.end}</span>
          <span style={{fontStyle: "italic"}}>{entry.location}</span>
        </div>
      </div>
    </div>
  );
}

function Entries() {
  return (
    <div>
    </div>
  );
}

function Employment() {
  return (
    <div id="employment">
      <SectionHeader />
      <Entry key="Epistemix" entry={entries[0]} />
    </div>
  );
}

export default Employment;
