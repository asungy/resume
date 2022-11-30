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
    company: "Epistemix",
    location: "Remote",
    start: "02/2022",
    end: "Current",
    bullets: [
      <span>
        Worked in a fast-pace, <b>start-up</b> environment delivering
        high-quality, documented code in a timely fashion.
      </span>,

      <span>
        Responsible for developing and deploying client-facing <b>Python</b>
        &nbsp;package used in SaaS platform product.
      </span>,

      <span>
        Methodically planned and executed rearchitecture plans in <b>Rust</b>
        &nbsp;to ensure longevity and performance of product.
      </span>,

      <span>
        Performed enhancements and streamlined build system of core engine
        software using <b>C++</b> best practices.
      </span>,

      <span>
        Ensured consistency and quality of various software products using&nbsp;
        <b>GitHub Actions</b> and <b>Docker</b>.
      </span>,
    ],
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
