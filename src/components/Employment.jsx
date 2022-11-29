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
    bullets: [
      "TODO-1",
      "TODO-2",
      "TODO-3"
    ]
  },
  {
    title: "Performance Test Engineer",
    company: "Vision Point Systems",
    location: "Remote",
    start: "08/2020",
    end: "01/2022",
    bullets: [
      <i>TODO-1</i>,
      <b>TODO-2</b>
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

      <ul className="entry-bullets">
        {entry.bullets.map((bullet) => <li>{bullet}</li>)}
      </ul>
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

function Employment() {
  return (
    <div id="employment">
      <SectionHeader />
      <Entries entries={entries}/>
    </div>
  );
}

export default Employment;
